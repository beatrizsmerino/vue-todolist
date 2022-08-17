const { execSync } = require("child_process");
const fs = require("fs");
const packageFile = JSON.parse(fs.readFileSync("package.json"));

function getOperatingSystem() {
	const nameOS = process.platform;

	return nameOS;
}

function checkMacOS() {
	const nameOS = getOperatingSystem();

	if (nameOS == "darwin") {
		return true;
	}

	return false;
}

function checkVolta() {
	const found = packageFile.volta;

	if (found) {
		return true;
	}

	return false;
}

function getGlobalDependenciesInstalledNVM() {
	const dependenceListInstalled = JSON.parse(execSync(`npm list -g --depth 0 --json`).toString()).dependencies;

	Object.keys(dependenceListInstalled).forEach(dependenceName => {
		delete dependenceListInstalled[dependenceName].from;
		delete dependenceListInstalled[dependenceName].resolved;
	});

	console.groupCollapsed("🚀 Global dependencies installed with the 'Manage Multiple Node Versions' NVM:");
	console.table(dependenceListInstalled);
	console.groupEnd();

	return dependenceListInstalled;
}

function getGlobalDependenciesInstalledVolta() {
	const dependenceListToInstall = packageFile.globalDependencies;

	let dependenceListInstalled = execSync(`volta list --current --format=plain`).toString();
	dependenceListInstalled = dependenceListInstalled.split("\n").filter(dependence => dependence.length > 0);
	dependenceListInstalled = dependenceListInstalled.map(dependence => dependence.split(" ")[1]);
	dependenceListInstalled = dependenceListInstalled.map(dependence => {
		const index = dependence.lastIndexOf("@");
		const dependenceNameInstalled = dependence.slice(0, index);
		let dependenceVersionInstalled = dependence.slice(index + 1);

		if (dependenceVersionInstalled === "project") {
			dependenceVersionInstalled = dependenceListToInstall[dependenceNameInstalled];
		}

		return {
			[dependenceNameInstalled]: dependenceVersionInstalled
		};
	});
	dependenceListInstalled = dependenceListInstalled.reduce(
		(previousItem, currentItem) => ({
			...previousItem,
			...currentItem
		}),
		{
		}
	);

	Object.keys(dependenceListInstalled).forEach(dependenceName => {
		delete dependenceListInstalled[dependenceName].from;
		delete dependenceListInstalled[dependenceName].resolved;
	});

	console.groupCollapsed("🚀 Global dependencies installed with the 'Manage Multiple Node Versions' VOLTA:");
	console.table(dependenceListInstalled);
	console.groupEnd();

	return dependenceListInstalled;
}

function getGlobalDependenciesToInstall() {
	const dependenceListToInstall = packageFile.globalDependencies;

	console.groupCollapsed("🚀 Global dependencies to install:");
	console.table(dependenceListToInstall);
	console.groupEnd();

	return dependenceListToInstall;
}

async function installGlobalDependencies() {
	const toInstall = await getGlobalDependenciesToInstall();

	const nameOS = getOperatingSystem();
	const usingMacOS = checkMacOS();
	console.groupCollapsed("🚀 Operation System:");
	console.log(nameOS);
	console.groupEnd();

	const usingVolta = checkVolta();
	if (usingVolta) {
		const installedVOLTA = await getGlobalDependenciesInstalledVolta();

		console.groupCollapsed("🚀 Preinstall global dependencies:");
		Object.keys(toInstall).forEach(dependenceNameToInstall => {
			const dependenceVersionToInstall = toInstall[dependenceNameToInstall].replace("~", "").replace("^", "");
			const found = Object.entries(installedVOLTA).find(([
				dependenceNameInstalled,
				dependenceVersionInstalled
			]) => dependenceNameInstalled === dependenceNameToInstall &&
					dependenceVersionInstalled.replace("~", "").replace("^", "") === dependenceVersionToInstall);

			if (!found) {
				execSync(`${usingMacOS ? "sudo" : ""} volta install ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
				console.log(`➕ Installing dependency: ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
			} else {
				console.log(`✅ Dependency already installed: ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
			}
		});
		console.groupEnd();
	} else {
		const installedNVM = await getGlobalDependenciesInstalledNVM();

		console.groupCollapsed("🚀 Dependencies:");
		Object.keys(toInstall).forEach(dependenceNameToInstall => {
			const dependenceVersionToInstall = toInstall[dependenceNameToInstall].replace("~", "").replace("^", "");
			const found = Object.entries(installedNVM).find(([
				dependenceNameInstalled,
				dependenceVersionInstalled
			]) => dependenceNameInstalled === dependenceNameToInstall &&
					dependenceVersionInstalled.replace("~", "").replace("^", "") === dependenceVersionToInstall);

			if (!found) {
				execSync(`${usingMacOS ? "sudo" : ""} npm i - g ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
				console.log(`➕ Installing dependency: ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
			} else {
				console.log(`✅ Dependency already installed: ${dependenceNameToInstall}@${dependenceVersionToInstall}`);
			}
		});
		console.groupEnd();
	}
}

installGlobalDependencies().
	then(() => {
		console.log("✅ Pre-installation of global packages is completed!");
	}).
	catch(error => {
		console.log("🚨 Error: ", error);
	});
