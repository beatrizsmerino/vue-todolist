# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.4.2](https://github.com/beatrizsmerino/vue-todolist/compare/3.4.1...3.4.2) (2024-01-05)


### Bug Fixes

* **config:** missing `.vscode` folder was deleted by mistake ([c21e236](https://github.com/beatrizsmerino/vue-todolist/commit/c21e2360e93d37e6de17db9bc8bce810c5815b18))

### [3.4.1](https://github.com/beatrizsmerino/vue-todolist/compare/3.4.0...3.4.1) (2024-01-04)


### Bug Fixes

* **globalDependencies:** dependencies are not installed correctly ([fd4ec60](https://github.com/beatrizsmerino/vue-todolist/commit/fd4ec603b07972a5ef2e21918e0bbf9e50fd073e))
* **globalDependencies:** dependencies are not installed correctly ([0706df0](https://github.com/beatrizsmerino/vue-todolist/commit/0706df0d1d855c2b4103eae7cbefd343c665e90b))

## [3.4.0](https://github.com/beatrizsmerino/vue-todolist/compare/3.3.4...3.4.0) (2024-01-04)


### Features

* **config:** add `husky` package and configuration ([70205bf](https://github.com/beatrizsmerino/vue-todolist/commit/70205bf14bd31837e6b6dbabb3d286bdfdde0344))
* **config:** add package and configuration of `conventional-changelog-cli` ([69ba05f](https://github.com/beatrizsmerino/vue-todolist/commit/69ba05ff8c5e19dae7154c36aeea2c738f3cb163))
* **config:** add package and configuration of `lint-staged` ([e1f2d81](https://github.com/beatrizsmerino/vue-todolist/commit/e1f2d81b402d52e97ccaafd15a31f80eb0fd5a0f))
* **config:** add package and configuration of `standard-version` ([1abdb14](https://github.com/beatrizsmerino/vue-todolist/commit/1abdb14bef7778e463ac4bab582d89a626786b4d))
* **config:** add the configuration for `commitizen` ([3b05343](https://github.com/beatrizsmerino/vue-todolist/commit/3b053433de7d9de54f71ed57747d5b951e4bdbe9))
* **config:** add the configuration for `cz-emoji` ([af361f1](https://github.com/beatrizsmerino/vue-todolist/commit/af361f1056f991b905958d23136364915e732bc6))
* **config:** add the conventional configuration for `commitlint` ([f949442](https://github.com/beatrizsmerino/vue-todolist/commit/f949442aebf0bc629ab1310d610106bb735b5c25))
* **config:** change the command `npm test` to `npm run lint` on the `pre-commit` file ([c952034](https://github.com/beatrizsmerino/vue-todolist/commit/c952034c669079fa7ef031ec5b698083add3adf6))
* **config:** check global packages installed with `volta` before installing them again ([9f31913](https://github.com/beatrizsmerino/vue-todolist/commit/9f319132bb6f5ec1899309307bbd2d2deeb32aaf))
* **config:** check if the commit message is a conventional commit ([d8bfa38](https://github.com/beatrizsmerino/vue-todolist/commit/d8bfa383db32771056f9c471e730f025a7c6ad34))
* **config:** created husky configuration file for test ([8499bc4](https://github.com/beatrizsmerino/vue-todolist/commit/8499bc45268ce2d1591bc0c2f4be5c05dd4c2a05))
* **config:** install dependencies globally and using `package.json` ([68bb998](https://github.com/beatrizsmerino/vue-todolist/commit/68bb998291dfa51536b17ff76b204294b34928cb))
* **config:** remove `pre-receive` hook and add `commit-msg` hook ([8a0e4dc](https://github.com/beatrizsmerino/vue-todolist/commit/8a0e4dc749b63d4034f4f4cc86113755e03f29bc))
* **config:** update `prettier` configuration ([39daa57](https://github.com/beatrizsmerino/vue-todolist/commit/39daa570632211d73bb8d4e9d2fb38d7a1ce6f6d))
* **config:** update the `eslint` configuration ([2d348dc](https://github.com/beatrizsmerino/vue-todolist/commit/2d348dcf88e48709fc46b26105e35aa0b2921163))


### Bug Fixes

* **changelog:** `changelog` command does not working ([b6d3555](https://github.com/beatrizsmerino/vue-todolist/commit/b6d3555a7cb2e8a71e0386eca53415e7d9fc0bfd))
* **changelog:** `changelog` command does not working ([7dfd698](https://github.com/beatrizsmerino/vue-todolist/commit/7dfd698cabd0405cf271cdc9579bcd881ff3f4b3))
* **changelog:** `package.json` and `package-lock.json` not updated when version changes ([831a748](https://github.com/beatrizsmerino/vue-todolist/commit/831a74850d911555936b21f44cffb1dff0a9bbc7))
* **config:** `package.json` not updated when install global deps ([f1c07fc](https://github.com/beatrizsmerino/vue-todolist/commit/f1c07fc8c629c70b16cd9153282890c78f1d9c87))
* **config:** add a warning message when there are no dependencies to install ([ad118fe](https://github.com/beatrizsmerino/vue-todolist/commit/ad118fe35c42d2e4e8e6b40e7d918517a72f2260))
* **config:** after installing `globalDependencies` add `^` before version number ([698075c](https://github.com/beatrizsmerino/vue-todolist/commit/698075c8d11c88cb5dc899f0c2f4378bb9c83c17))
* **config:** after run `npm install` the `globalDependencies` is not updated ([a3c6883](https://github.com/beatrizsmerino/vue-todolist/commit/a3c6883b1db46438ffedb8a133ba80be243e2a4f))
* **config:** change the version to the current on the `package.json` and `version.sbt` files ([028fd1f](https://github.com/beatrizsmerino/vue-todolist/commit/028fd1fbafccc1f84f1a9a0f617fccbd870a3874))
* **config:** failed to install dependencies globally with `npm install` ([c465131](https://github.com/beatrizsmerino/vue-todolist/commit/c46513114c4c6943fcc33bbe1198f88cd5625730))
* **config:** gets errors about `@vue/cli` and `prettier` ([14d4c95](https://github.com/beatrizsmerino/vue-todolist/commit/14d4c95cf93dbc39f010a96e4bbcefcf2c00828a))
* **config:** install updated global dependencies from local and uninstalled ones ([b0f79ea](https://github.com/beatrizsmerino/vue-todolist/commit/b0f79eaf167f773fedecc0e119c4c6522558c3b3))
* **config:** many configuration files for `commitlint`, `commitzen` and `cz-emoji` ([2b490d9](https://github.com/beatrizsmerino/vue-todolist/commit/2b490d983187233165a4dd50936e1517df487b37))
* **config:** reinstalled the already installed global dependencies ([0b85eb4](https://github.com/beatrizsmerino/vue-todolist/commit/0b85eb4309547e0b0141cf08398ce8f551221682))
* **config:** remove the `v` prefix from the version git tag ([c9e2e1f](https://github.com/beatrizsmerino/vue-todolist/commit/c9e2e1f3663bca702e8886a83047b797bf23be28))
* **config:** the command `npm run install` does not install the packages globally ([a0ec440](https://github.com/beatrizsmerino/vue-todolist/commit/a0ec440a812cd190f7f7f9a35c6bda985b6f977c))
* **config:** when there is no data to display the `console` looks strange ([6cd44a1](https://github.com/beatrizsmerino/vue-todolist/commit/6cd44a14fbb340572ed1480c6078c567bbefa634))
* **deps-global:** misspelled git command to install global packages ([d5eddf0](https://github.com/beatrizsmerino/vue-todolist/commit/d5eddf08dade3aeeddfab650fa7e6a6b421690a6))
* **deps:** cannot install npm packages ([0e50e6a](https://github.com/beatrizsmerino/vue-todolist/commit/0e50e6adfc2e74bc692a379a2ab304b99ef22f2b))
* **eslint:** get errors when format `preinstall-global-dependencies.js` file ([b67277f](https://github.com/beatrizsmerino/vue-todolist/commit/b67277f0c5d41d2b92a05b09c4bdb5e46b3869b5))


### Refactor

* **changelog:** remove manually added commits from `changelog` ([87ed617](https://github.com/beatrizsmerino/vue-todolist/commit/87ed617fc8ef135c23f3dd82a060f3cfbc84ef13))
* **changelog:** use `changelog:update` inside the `standar-version-updater-gitflow.sh` file ([7a005e1](https://github.com/beatrizsmerino/vue-todolist/commit/7a005e1037b6aadd469cb6f70c2de151c2478ce5))
* **config:** improved `console` with more descriptive `emojis` ([6657a0a](https://github.com/beatrizsmerino/vue-todolist/commit/6657a0a42ceb8cc6dc4ab3c561c4fb8621b474a2))
* **config:** reduce the code from `preinstall-global-depenencies.js` ([0a62ae5](https://github.com/beatrizsmerino/vue-todolist/commit/0a62ae516b9cdff3b6a89baa0010020f23c089a2))
* **config:** update `console.log` of the `preinstall-global-dependencies.js` file ([63e0277](https://github.com/beatrizsmerino/vue-todolist/commit/63e027772406d97ac4787562dc178c896ec211c3))
* **config:** update `preinstall-global-dependencies.js` file ([4131c60](https://github.com/beatrizsmerino/vue-todolist/commit/4131c60f4695dbfea49514b2bad7a16bf1c61fc3))
* **config:** update the `preinstall-global-dependencies.js` file ([f4e28de](https://github.com/beatrizsmerino/vue-todolist/commit/f4e28def79ab3af1284d063949cfd2d952aa7b37))
* **config:** update the `preinstall-global-dependencies.js` file ([9fc446a](https://github.com/beatrizsmerino/vue-todolist/commit/9fc446a440701d1cfba8d8f84faed8d4db0b6b6e))
* **npm:** rename `changelog` command to `changelog:init` ([38cd4d0](https://github.com/beatrizsmerino/vue-todolist/commit/38cd4d033b86eeb5658118109cd660ca65ae1fbd))
* **npm:** rename `release` command to `changelog:update` ([f3380bc](https://github.com/beatrizsmerino/vue-todolist/commit/f3380bcffd81875af5ea15e7961e575e75d21978))
* **readme:** reduce the command titles ([e24a6e6](https://github.com/beatrizsmerino/vue-todolist/commit/e24a6e68da6c62cd28b79fe851651643a0b459b0))
* **readme:** rename `changelog` command to `changelog:init` ([04d8276](https://github.com/beatrizsmerino/vue-todolist/commit/04d8276c1afeab98e88efe6a0510e05653cd9ac0))
* **readme:** rename `release` command to `changelog:update` ([17c7fbc](https://github.com/beatrizsmerino/vue-todolist/commit/17c7fbca54304eff34cb9d3bc24701dd87f2071f))

## [3.0.7](https://github.com/beatrizsmerino/vue-todolist/compare/3.0.6...3.0.7) (2022-07-19)



# 0.0.0 (2019-04-25)
