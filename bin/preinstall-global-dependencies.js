const { execSync } = require("child_process");
const fs = require("fs");
const packageFile = JSON.parse(fs.readFileSync("package.json"));

const getOperatingSystem = () => process.platform;
const checkMacOS = () => getOperatingSystem() === "darwin";
const checkVolta = () => Boolean(packageFile.volta);

const printTableData = (title, data) => {
	console.groupCollapsed(title);
	console.table(data);
	console.groupEnd();
};

const printInitialConfig = toInstall => {
	printTableData("🚀 Operating System:", { "Operating System": getOperatingSystem() });
	printTableData("🚀 Global dependencies to install:", toInstall);
};

const getDependencyVersion = dependency => dependency.version || "unknown";
const isDependencyOverridden = dependency => dependency.overridden;

const parseDependencies = dependenceList => Object.keys(dependenceList).reduce((acc, key) => {
	const version = getDependencyVersion(dependenceList[key]);
	const overridden = isDependencyOverridden(dependenceList[key]);

	acc[key] = {
		version,
		overridden,
	};

	return acc;
}, {});

const getDependencyInfo = dependence => {
	const [
		name,
		version,
	] = dependence.split("@");

	return { [name]: version };
};

const getInstallationConfig = () => {
	const toInstall = packageFile.globalDependencies;
	const usingMacOS = checkMacOS();
	const installCommand = checkVolta() ? "volta install" : "npm i -g";

	return {
		toInstall,
		usingMacOS,
		installCommand,
	};
};

const getDependenciesNVM = () => {
	const dependenceListInstalled = JSON.parse(execSync(`npm list -g --depth 0 --json`).toString()).dependencies;
	const parsedDependencies = parseDependencies(dependenceListInstalled);
	printTableData("🚀 Global dependencies installed with NVM:", parsedDependencies);

	return parsedDependencies;
};

const getDependenciesVolta = () => {
	const rawList = execSync(`volta list --format=plain`).toString();
	const installedDependencies = rawList.
		split("\n").
		filter(line => line && line.includes("@")).
		map(getDependencyInfo).
		reduce(
			(acc, dep) => ({
				...acc,
				...dep,
			}),
			{},
		);

	printTableData("🚀 Global dependencies installed with Volta:", installedDependencies);

	return installedDependencies;
};

const installDependency = ({ name, targetVersion, usingMacOS, installCommand }) => {
	console.log(`➕ Installing dependency: ${name}@${targetVersion}`);
	execSync(`${usingMacOS ? "sudo " : ""}${installCommand} ${name}@${targetVersion}`);
};

const installDependencies = ({ dependenciesToInstall, installedDependencies, usingMacOS, installCommand }) => {
	console.groupCollapsed("🚀 Installing global dependencies:");
	Object.keys(dependenciesToInstall).forEach(dependenceNameToInstall => {
		const targetVersion = dependenciesToInstall[dependenceNameToInstall].replace(/[~^]/gu, "");
		const installedVersion = installedDependencies[dependenceNameToInstall];

		if (installedVersion.version !== targetVersion) {
			installDependency({
				"name": dependenceNameToInstall,
				targetVersion,
				usingMacOS,
				installCommand,
			});
		} else {
			console.log(`✅ Dependency already installed: ${dependenceNameToInstall}@${installedVersion.version}`);
		}
	});
	console.groupEnd();
};

const init = () => {
	try {
		const { toInstall, usingMacOS, installCommand } = getInstallationConfig();

		printInitialConfig(toInstall);

		const installedDependencies = checkVolta() ? getDependenciesVolta() : getDependenciesNVM();

		installDependencies({
			"dependenciesToInstall": toInstall,
			installedDependencies,
			usingMacOS,
			installCommand,
		});

		console.log("✅ Pre-installation of global packages is completed!");
	} catch (error) {
		console.error("🚨 Error: ", error);
	}
};

init();
