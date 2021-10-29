/*
 * MODULE VUEX
 * TASKS
 * =================================================
 */

const state = {
	task: {
		list: [
			{
				id: 1,
				name: 'Do something awesome!',
				status: {
					done: false
				}
			},
			{
				id: 2,
				name: 'Buy toilet paper',
				status: {
					done: false
				}
			},
			{
				id: 3,
				name: 'Learn Vue',
				status: {
					done: false
				}
			}
		]
	}
};

const getters = {
	getTaskList(state) {
		return state.task.list;
	},
	getTotalTaskList(state) {
		return state.task.list.length;
	},
	getTotalTaskListDone(state) {
		return state.task.list.filter(item => item.status.done).length;
	},
	getTaskLast(state) {
		return state.task.list[state.task.list.length - 1];
	}
};

const actions = {
	addTask({commit}, task) {
		const taskNew = {
			id: task.id,
			name: task.name,
			status: {
				done: false
			}
		};
		commit('addTask', taskNew);
	},
	updateTask({commit}, task) {
		commit('updateTask', task);
	},
	removeTask({commit}, taskId) {
		commit('removeTask', taskId);
	},
	removeTaskList({commit}) {
		commit('removeTaskList');
	},
	removeTaskListDone({commit}) {
		commit('removeTaskListDone');
	},
	checkTaskListLocalStorage({commit}) {
		if (localStorage.getItem('tasks')) {
			try {
				commit('updateTaskListLocalStorage');
			} catch (e) {
				commit('removeTaskListLocalStorage');
			}
		} else {
			commit('createTaskListLocalStorage');
		}
	},
	createTaskListLocalStorage({commit}) {
		commit('createTaskListLocalStorage');
	}
};

const mutations = {
	addTask(state, task) {
		state.task.list.push(task);
	},
	updateTask(state, task) {
		const taskIndex = state.task.list.findIndex(item => item.id === task.id);
		if (taskIndex !== -1) {
			state.task.list.splice(taskIndex, 1, task);
		}
	},
	removeTask(state, taskId) {
		state.task.list = state.task.list.filter(item => item.id !== taskId);
	},
	removeTaskList(state) {
		state.task.list = [];
	},
	removeTaskListDone(state) {
		state.task.list = state.task.list.filter(item => !item.status.done);
	},
	createTaskListLocalStorage(state) {
		localStorage.setItem('tasks', JSON.stringify(state.task.list));
	},
	updateTaskListLocalStorage(state) {
		state.task.list = JSON.parse(localStorage.getItem('tasks'));
	},
	removeTaskListLocalStorage() {
		localStorage.removeItem('tasks');
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
