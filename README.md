![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-todolist)
![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-todolist)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-todolist)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-todolist)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-todolist)

# Vue Todolist

This repository is a **task management application**, a productivity tool created to practice and learn the `Vue`
Framework.

![Vue Todolist](./README/videos/vue-todolist.gif)

## Development interface

![Vue logo](./README/images/vue-js-2.jpg)

Is developed with **[vue.js](https://vuejs.org/)** 2.6.10 a Javascript framework. This project use
[Vue Cli](https://cli.vuejs.org/) and has dependencies as webpack, google fonts and font awesome icon.

## Content

### Structure of folders

```shell
- assets
    - scss
- components
    - UI
        - [Button](./src/components/UI/Button.vue)
        - [Message](./src/components/UI/Message.vue)
        - [Tag](./src/components/UI/Tag.vue)
    - Page
        - [PageTitle](./src/components/Page/PageTitle.vue)
    - Dashboard
        - [Dashboard](./src/components/Dashboard/Dashboard.vue)
        - [DashboardContent](./src/components/Dashboard/DashboardContent.vue)
        - [DashboardInfo](./src/components/Dashboard/DashboardInfo.vue)
    - Task
        - [TaskList](./src/components/Task/TaskList.vue)
        - [TaskPreview](./src/components/Task/TaskPreview.vue)
        - [TaskNew](./src/components/Task/TaskNew.vue)
- [App.vue](./src/App.vue)
- [main.js](./src/main.js)
```

## How work

The `vue-todolist` is an application created in vue that allows you to list your pending tasks, both on a personal level
for "shopping" or "reminders" and on a professional level to manage your projects.

It has a dashboard where you can add a task, mark it as done and delete it. At the top of this board, you can see the
total number of tasks and the total number of completed tasks, it also has 2 buttons, one to delete all tasks and
another to delete only the completed tasks when there are any. In the middle area of the board is shown the list of
tasks, each task has 2 buttons, one to mark it as done and another one to delete it, any of these 2 actions animates the
task when it enters and when it leaves the list. And in the lower area of the board there is a field to enter the name
of the new task by clicking on the button on the right or by pressing the enter key.

All the tasks are saved and updated in the browser's `Local Storage`. Each task is a `object json` that has an
identifier number or `id`, a name and its status. When the task is created the identifier number is generated from the
total number of tasks plus the current one, and its status is marked as task not done.

## Tags versions

### **v1.0.0**

Uses straightforward template syntax for create a `Vue Instance` in a single file

### **v2.0.0**

Uses module systems with the `Component Vue-cli` and `Emit events` with `vue methods`, which allow code encapsulation
and reuse.

### **v3.0.0**

It uses the `Event Bus` and `Vuex` for a multi-directional data flow, which allows accessing status or triggering
actions no matter where the component is located.

## Project setup

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

### Run your tests

```shell
npm run test
```

### Lints and fixes files

```shell
npm run lint
```

### Publish in Github Pages

```shell
npm run deploy
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

![Giphy Todolist](https://media.giphy.com/media/B7o99rIuystY4/giphy.gif)
