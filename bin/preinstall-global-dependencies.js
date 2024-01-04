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
const getCleanVersion = version => (version?.startsWith("^") ? version : `^${version}`) || (version?.startsWith("~") ? version : `~${version}`);

const printTableData = (title, data) => {
	if (isObjectEmpty(data)) {
		console.groupCollapsed(`${title}`);
		console.table({ "💔 📂 No found data": data });
		console.groupEnd();
	} else {
		console.groupCollapsed(`${title}:`);
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

const isGlobalDepAlsoLocal = depName => getLocalDepsToInstall().hasOwnProperty(depName);

const getGlobalDepsInstalled = () => {
	const deps = execSync(getCommandListDeps()).toString();

	return isVolta() ? parseVoltaDeps(deps) : parseNpmDeps(deps);
};

const shouldUpdateDependency = ({ localVersion, globalVersion, installedVersion }) => getCleanVersion(localVersion) !== getCleanVersion(globalVersion) ||
	getCleanVersion(localVersion) !== getCleanVersion(installedVersion) ||
	getCleanVersion(installedVersion) !== getCleanVersion(globalVersion);

const getGlobalDepsNotUpdated = () => {
	const deps = {};

	Object.entries(getGlobalDepsToInstall()).forEach(([
		depName,
		depVersion,
	]) => {
		if (isGlobalDepAlsoLocal(depName)) {
			const isVersionDifferent = shouldUpdateDependency({
				"localVersion": getLocalDepsToInstall()[depName],
				"globalVersion": depVersion,
				"installedVersion": getGlobalDepsInstalled()[depName],
			});

			if (isVersionDifferent) {
				deps[depName] = getCleanVersion(getLocalDepsToInstall()[depName]);
			}
		} else if (!getGlobalDepsInstalled()[depName]) {
			deps[depName] = depVersion;
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
		if (
			getGlobalDepsInstalled()[depName] &&
			shouldUpdateDependency({
				"localVersion": getLocalDepsToInstall()[depName],
				"globalVersion": depVersion,
				"installedVersion": getGlobalDepsInstalled()[depName],
			})
		) {
			packageGlobalDeps[depName] = `${getCleanVersion(getGlobalDepsInstalled()[depName])}`;
		}
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

	printTableData("🚀 ⬇️  Global dependencies Installing...", logDeps);
};

function printInfo() {
	printTableData("🔍️ 🛠️  Project environment", {
		"🖥️  Operating System": getOperatingSystem(),
		"📦️ Package Management": getPackageManagement(),
	});
	printTableData("🔍️ 📃 Local dependencies To Install", getLocalDepsToInstall());
	printTableData("🔍️ 📃 Global dependencies To Install", getGlobalDepsToInstall());
	printTableData("✅ 📃 Global dependencies Installed", getGlobalDepsInstalled());
	printTableData("🚀 💀 Global dependencies Not Installed!!", getGlobalDepsNotInstalled());
	printTableData("🚀 ♻️  Global dependencies Not Updated!!", getGlobalDepsNotUpdated());
}

const init = () => {
	try {
		printInfo();
		installGlobalDeps();
		syncGlobalDeps();

		console.log("✅ 💚 Pre-installation of global packages is completed!");
	} catch (error) {
		console.error("🚨 ⚠️ Error: ", error);
	}
};

init();
