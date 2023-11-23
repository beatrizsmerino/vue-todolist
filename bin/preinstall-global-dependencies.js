const { execSync } = require("child_process");
const fs = require("fs");
const packageFile = JSON.parse(fs.readFileSync("package.json"));

const getOperatingSystem = () => process.platform;
const isMacOS = () => getOperatingSystem() === "darwin";
const isVolta = () => Boolean(packageFile.volta);
const getPackageManagement = () => (isVolta() ? "Volta" : "NPM");
const getCommandListDeps = () => (isVolta() ? "volta list --format=plain" : "npm list -g --depth 0 --json");
const getCommandInstallDeps = () => (isVolta() ? "volta install" : "npm i -g");

const printTableData = (title, data) => {
	console.groupCollapsed(title);
	console.table(data);
	console.groupEnd();
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
	acc[key] = {
		"version": value.version || "unknown",
		"overridden": Boolean(value.overridden),
	};

	return acc;
}, {});

const getGlobalDepsToInstall = () => packageFile.globalDependencies || {};

const getGlobalDepsInstalled = () => {
	const deps = execSync(getCommandListDeps()).toString();

	return isVolta() ? parseVoltaDeps(deps) : parseNpmDeps(deps);
};

const installGlobalDep = ({ depNameToInstall, depVersionToInstall }) => {
	console.log(`➕ Installing dependency: ${depNameToInstall}@${depVersionToInstall}`);
	execSync(`${isMacOS() ? "sudo " : ""}${getCommandInstallDeps()} ${depNameToInstall}@${depVersionToInstall}`);
};

const installGlobalDeps = () => {
	console.groupCollapsed("🚀 Installing global dependencies:");
	const listDepsToInstall = getGlobalDepsToInstall();
	const listDepsInstalled = getGlobalDepsInstalled();

	Object.keys(listDepsToInstall).forEach(depNameToInstall => {
		const depVersionToInstall = listDepsToInstall[depNameToInstall].replace(/[~^]/gu, "");
		const depVersionInstalled = listDepsInstalled[depNameToInstall]?.version || "";

		if (depVersionInstalled !== depVersionToInstall) {
			installGlobalDep({
				"name": depNameToInstall,
				"version": depVersionToInstall,
			});
		} else {
			console.log(`✅ Dependency already installed: ${depNameToInstall}@${depVersionInstalled}`);
		}
	});
	console.groupEnd();
};

const init = () => {
	try {
		printTableData("🚀 Project environment:", {
			"Operating System": getOperatingSystem(),
			"Package Management": getPackageManagement(),
		});
		installGlobalDeps();
		console.log("✅ Pre-installation of global packages is completed!");
	} catch (error) {
		console.error("🚨 Error: ", error);
	}
};

init();
