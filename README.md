![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-todolist)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-todolist)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-todolist)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-todolist)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-todolist)

# Vue Todolist

![Vue Todolist](./README/videos/vue-todolist.gif)

## 🎯 Description

The `vue-todolist` repository is a **task management application**, a productivity tool created to practice and learn the `Vue` Framework.

An application that allows you to list your pending tasks, both on a personal level for "shopping" or "reminders" and on a professional level to manage your projects.

It has a dashboard where you can add a task, mark it as done and delete it. At the top of this board, you can see the total number of tasks and the total number of completed tasks, it also has 2 buttons, one to delete all tasks and another to delete only the completed tasks when there are any. In the middle area of the board is shown the list of tasks, each task has 2 buttons, one to mark it as done and another one to delete it, any of these 2 actions animates the task when it enters and when it leaves the list. And in the lower area of the board there is a field to enter the name of the new task by clicking on the button on the right or by pressing the enter key.

All the tasks are saved and updated in the browser's `Local Storage`. Each task is a `object json` that has an identifier number or `id`, a name and its status. When the task is created the identifier number is generated from the total number of tasks plus the current one, and its status is marked as task not done.

## 🏗️ Developed with

Is developed with **[Vue 2](https://vuejs.org/)** a Javascript framework, use
[Vue Cli](https://cli.vuejs.org/) and has dependencies as `webpack`, `google fonts` and `font awesome icon`.


[![NVM](https://img.shields.io/badge/nvm-F4DD4B.svg)](https://github.com/nvm-sh/nvm)
[![Node](https://img.shields.io/badge/node-43853D.svg)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/npm-CC3534.svg)](https://www.npmjs.com/)  
[![Prettier](https://img.shields.io/badge/prettier-F8BC45.svg?logo=prettier&labelColor=1A2B34)](https://prettier.io/)
[![Eslint](https://img.shields.io/badge/eslint-4B32C3.svg?logo=eslint&labelColor=341BAB)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/stylelint-3578e5.svg?logo=stylelint&logoColor=000000&labelColor=306cce)](https://stylelint.io/)  
[![Semantic release](https://img.shields.io/badge/semantic--release-e10079.svg?logo=semantic-release&labelColor=494949)](https://semantic-release.gitbook.io/semantic-release/)
[![Conventional commits](https://img.shields.io/badge/conventional--commits-fa6673.svg?logo=conventionalcommits&logoColor=FFFFFF)](https://www.conventionalcommits.org/en/v1.0.0/)  
[![Commitlint](https://img.shields.io/badge/commitlint-51B1DD.svg?logo=commitlint&logoColor=51B1DD&labelColor=000000&color=51B1DD)](https://commitlint.js.org/#/)
[![Commitzen](https://img.shields.io/badge/commitzen-FDF6E4.svg?logo=gnometerminal&logoColor=000000)](https://commitizen-tools.github.io/commitizen/)  
[![Lint staged](https://img.shields.io/badge/lint--staged-885430.svg?logo=gnometerminal)](https://github.com/okonet/lint-staged)
[![Pre-commit](https://img.shields.io/badge/pre--commit-76877C.svg?logo=pre-commit&labelColor=1F2D23)](https://pre-commit.com/)
[![Husky](https://img.shields.io/badge/husky-42B983.svg?logo=gnometerminal&logoColor=000000)](https://typicode.github.io/husky/#/)  
[![GitHub actions](https://img.shields.io/badge/github--actions-025e8c.svg?logo=githubactions&logoColor=FFFFFF)](https://docs.github.com/es/actions)

## 🔖 Tags versions

### v1.0.0

Uses straightforward template syntax for create a `Vue Instance` in a single file

### v2.0.0

Uses module systems with the `Component Vue-cli` and `Emit events` with `vue methods`, which allow code encapsulation
and reuse.

### v3.0.0

It uses the `Event Bus` and `Vuex` for a multi-directional data flow, which allows accessing status or triggering
actions no matter where the component is located.

## 🚀 Commands

### Install dependencies

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Lints and fixes files

```shell
npm run lint
```

### Generate Changelog file

```shell
npm run changelog:init
```

### Create tag version and update files in the current branch

```shell
npm run changelog:update
```

### Create tag version and update files using gitflow structure

```shell
npm run changelog:update:gitflow
```

### Publish in Github Pages

```shell
npm run deploy
```

![Giphy Todolist](https://media.giphy.com/media/B7o99rIuystY4/giphy.gif)
