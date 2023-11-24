const { execSync } = require("child_process");
const fs = require("fs");
const packageFileName = "package.json";
const packageFileContent = JSON.parse(fs.readFileSync(packageFileName));

const getOperatingSystem = () => process.platform;
const isObjectEmpty = obj => Object.keys(obj).length === 0;
const isMacOS = () => getOperatingSystem() === "darwin";
const isVolta = () => Boolean(packageFileContent.volta);
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

const getLocalDepsToInstall = () => {
	try {
		const dependencies = packageFileContent.dependencies || {};
		const devDependencies = packageFileContent.devDependencies || {};
		const localDeps = {
			...dependencies,
			...devDependencies,
		};

		return localDeps;
	} catch (error) {
		console.error(`🚨 Error al leer ${packageFileName}:`, error);

		return {};
	}
};

const getGlobalDepsToInstall = () => packageFileContent.globalDependencies || {};

const getGlobalDepsInstalled = () => {
	const deps = execSync(getCommandListDeps()).toString();

	return isVolta() ? parseVoltaDeps(deps) : parseNpmDeps(deps);
};

const getGlobalDepsToUpdate = () => {
	const localDeps = getLocalDepsToInstall();
	const globalDeps = getGlobalDepsToInstall();
	const installedDeps = getGlobalDepsInstalled();
	const updatedDeps = {};

	Object.entries(globalDeps).forEach(([
		depName,
		globalVersion,
	]) => {
		if (
			!installedDeps[depName] ||
			(getCleanVersion(globalVersion) !== getCleanVersion(installedDeps[depName]) &&
				getCleanVersion(localDeps[depName]))
		) {
			updatedDeps[depName] = getCleanVersion(localDeps[depName]);
		}
	});

	return updatedDeps;
};

const setGlobalDepsToUpdate = () => {
	const packageJson = JSON.parse(fs.readFileSync(packageFileName, "utf8"));
	const updatedDeps = packageJson.globalDependencies || {};

	for (const [
		depName,
		version,
	] of Object.entries(updatedDeps)) {
		packageJson.globalDependencies[depName] = ensureVersionPrefix(version);
	}

	fs.writeFileSync(packageFileName, JSON.stringify(packageJson, null, 2));
};

const setGlobalDepsToInstall = () => {
	const depsToUpdate = getGlobalDepsToUpdate();
	const installedDeps = getGlobalDepsInstalled();
	const depsToInstall = {};

	for (const [
		dep,
		version,
	] of Object.entries(depsToUpdate)) {
		if (!installedDeps[dep] || installedDeps[dep].version !== version) {
			depsToInstall[dep] = version;
		}
	}

	return depsToInstall;
};

const installGlobalDeps = () => {
	const listDepsToInstall = setGlobalDepsToInstall();
	const installationMessages = [];

	Object.entries(listDepsToInstall).forEach(([
		depNameToInstall,
		depVersionToInstall,
	]) => {
		if (depNameToInstall && depVersionToInstall) {
			const commandInstallDeps = getCommandInstallDeps();
			execSync(`${commandInstallDeps} ${depNameToInstall}@${getCleanVersion(depVersionToInstall)}`);
			installationMessages.push({
				"Status": `➕`,
				"Name": depNameToInstall,
				"Version": depVersionToInstall,
			});
		}
	});

	printTableData("🚀 Installing global dependencies:", installationMessages);
};

const init = () => {
	try {
		printTableData("🚀 Project environment:", {
			"Operating System": getOperatingSystem(),
			"Package Management": getPackageManagement(),
		});
		printTableData("🚀 Local dependencies to install:", getLocalDepsToInstall());
		printTableData("🚀 Global dependencies to install:", getGlobalDepsToInstall());
		printTableData("🚀 Global dependencies installed:", getGlobalDepsInstalled());
		printTableData("🚀 Global dependencies to update:", getGlobalDepsToUpdate());
		installGlobalDeps();
		setGlobalDepsToUpdate();
		console.log("✅ Pre-installation of global packages is completed!");
	} catch (error) {
		console.error("🚨 Error: ", error);
	}
};

init();
