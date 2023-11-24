const { execSync } = require("child_process");
const fs = require("fs");

const packageName = "package.json";
const packageContent = JSON.parse(fs.readFileSync(packageName, "utf8"));
const packageLocalDeps = packageContent.dependencies || {};
const packageLocalDevDeps = packageContent.devDependencies || {};
const packageGlobalDeps = packageContent.globalDependencies || {};

const getOperatingSystem = () => process.platform;
const isObjectEmpty = obj => Object.keys(obj).length === 0;
const isMacOS = () => getOperatingSystem() === "darwin";
const isVolta = () => Boolean(packageContent.volta);
const getPackageManagement = () => (isVolta() ? "Volta" : "NPM");
const getCommandListDeps = () => (isVolta() ? "volta list --format=plain" : "npm list -g --depth 0 --json");
const getCommandInstallDeps = () => `${isMacOS() ? "sudo " : ""}${isVolta() ? "volta install" : "npm i -g"}`;
const getCleanVersion = version => version.replace(/[~^]/gu, "");
const ensureVersionPrefix = version => (version.startsWith("^") ? version : `^${version}`);

const printTableData = (title, data) => {
	if (isObjectEmpty(data)) {
		console.groupCollapsed(title);
		console.log(`No found data !!`);
		console.table(data);
		console.log();
	} else {
		console.groupCollapsed(title);
		console.table(data);
		console.groupEnd();
	}
};

const parseVoltaDeps = deps => deps.
	split("\n").
	filter(line => line.includes("@")).
	map(dep => {
		const [
			name,
			version,
		] = dep.split("@");

		return { [name]: version };
	}).
	reduce(
		(acc, dep) => ({
			...acc,
			...dep,
		}),
		{},
	);

const parseNpmDeps = deps => Object.entries(JSON.parse(deps).dependencies).reduce((acc, [
	key,
	value,
]) => {
	acc[key] = value.version || "unknown";

	return acc;
}, {});

const getLocalDepsToInstall = () => ({
	...packageLocalDeps,
	...packageLocalDevDeps,
});

const getGlobalDepsToInstall = () => packageGlobalDeps;

const getGlobalDepsInstalled = () => {
	const deps = execSync(getCommandListDeps()).toString();

	return isVolta() ? parseVoltaDeps(deps) : parseNpmDeps(deps);
};

const getGlobalDepsNotUpdated = () => {
	const deps = {};

	Object.entries(getGlobalDepsToInstall()).forEach(([
		depName,
		depVersion,
	]) => {
		if (
			!getGlobalDepsInstalled()[depName] ||
			(getCleanVersion(depVersion) !== getCleanVersion(getGlobalDepsInstalled()[depName]) &&
				getCleanVersion(getLocalDepsToInstall()[depName]))
		) {
			deps[depName] = getCleanVersion(getLocalDepsToInstall()[depName]);
		}
	});

	return deps;
};

const getGlobalDepsNotInstalled = () => {
	const deps = {};

	Object.entries(getGlobalDepsNotUpdated()).forEach(([
		depName,
		depVersion,
	]) => {
		if (!getGlobalDepsInstalled()[depName] || getGlobalDepsInstalled()[depName].depVersion !== depVersion) {
			deps[depName] = depVersion;
		}
	});

	return deps;
};

const syncGlobalDeps = () => {
	Object.entries(getGlobalDepsToInstall()).forEach(([
		depName,
		depVersion,
	]) => {
		packageContent.globalDependencies[depName] = ensureVersionPrefix(depVersion);
	});

	fs.writeFileSync(packageName, JSON.stringify(packageContent, null, 2));
};

const installGlobalDeps = () => {
	const logDeps = [];

	Object.entries(getGlobalDepsNotInstalled()).forEach(([
		depName,
		depVersion,
	]) => {
		if (depName && depVersion) {
			execSync(`${getCommandInstallDeps()} ${depName}@${getCleanVersion(depVersion)}`);
			logDeps.push({
				"Status": `➕`,
				"Name": depName,
				"Version": depVersion,
			});
		}
	});

	printTableData("🚀 Installing global dependencies:", logDeps);
};

function printInfo() {
	printTableData("🚀 Project environment:", {
		"Operating System": getOperatingSystem(),
		"Package Management": getPackageManagement(),
	});
	printTableData("🚀 Local dependencies to install:", getLocalDepsToInstall());
	printTableData("🚀 Global dependencies to install:", getGlobalDepsToInstall());
	printTableData("🚀 Global dependencies installed:", getGlobalDepsInstalled());
	printTableData("🚀 Global dependencies not installed:", getGlobalDepsNotInstalled());
	printTableData("🚀 Global dependencies not updated:", getGlobalDepsNotUpdated());
}

const init = () => {
	try {
		printInfo();
		installGlobalDeps();
		syncGlobalDeps();

		console.log("✅ Pre-installation of global packages is completed!");
	} catch (error) {
		console.error("🚨 Error: ", error);
	}
};

init();
