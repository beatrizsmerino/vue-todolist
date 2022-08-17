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
	const dependenceList = JSON.parse(execSync(`npm list -g --depth 0 --json`).toString()).dependencies;

	Object.keys(dependenceList).forEach(dependenceName => {
		delete dependenceList[dependenceName].from;
		delete dependenceList[dependenceName].resolved;
	});

	console.groupCollapsed("🚀 Global dependencies installed with the 'Manage Multiple Node Versions' NVM:");
	console.table(dependenceList);
	console.groupEnd();

	return dependenceList;
}

function getGlobalDependenciesInstalledVolta() {
	const dependenceStringInstalled = execSync(`volta list --current --format=plain`).toString();
	const dependenceList = packageFile.globalDependencies;

	console.groupCollapsed("🚀 Global dependencies installed with the 'Manage Multiple Node Versions' VOLTA:");
	console.table(dependenceStringInstalled);
	console.groupEnd();

	return dependenceList;
}

function getGlobalDependenciesToInstall() {
	const dependenceList = packageFile.globalDependencies;

	console.groupCollapsed("🚀 Global dependencies to install:");
	console.table(dependenceList);
	console.groupEnd();

	return dependenceList;
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
		await getGlobalDependenciesInstalledVolta();

		console.groupCollapsed("🚀 Preinstall global dependencies:");
		Object.entries(toInstall).forEach(([
			dependenceName,
			dependenceVersion
		]) => {
			execSync(`${usingMacOS ? "sudo" : ""} volta install ${dependenceName}@${dependenceVersion} `);
			console.log(`➕ Installing dependency: ${dependenceName}@${dependenceVersion}`);
		});
		console.groupEnd();
	} else {
		const installedNVM = await getGlobalDependenciesInstalledNVM();

		console.groupCollapsed("🚀 Dependencies:");
		Object.keys(toInstall).forEach(dependenceName => {
			const found = Object.keys(installedNVM).find(dependenceInstalled => dependenceInstalled === dependenceName);
			const dependenceVersion = toInstall[dependenceName].replace("~", "").replace("^", "");
			if (!found) {
				execSync(`${usingMacOS ? "sudo" : ""} npm i - g ${dependenceName} @${dependenceVersion} `);
				console.log(`➕ Installing dependency: ${dependenceName}@${dependenceVersion}`);
			} else {
				console.log(`✅ Dependency already installed: ${dependenceName} @${dependenceVersion} `);
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
