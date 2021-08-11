<template>
	<div class="dashboard">
		<DashboardInfo
			:total-task-list="getTotalTasks"
			:total-task-list-done="getTotalTasksDone"
			@task-list-remove="removeTaskList()"
			@task-list-done-remove="removeTaskListDone()"
		/>
		<DashboardContent
			:task-list="task.list"
			@task-remove="removeTask"
			@task-done="changeTaskDone"
			@task-add="addTask"
		/>
	</div>
</template>

<script>
	import DashboardInfo from "@/components/Dashboard/DashboardInfo.vue";
	import DashboardContent from "@/components/Dashboard/DashboardContent.vue";


	export default {
		name: 'Dashboard',
		components: {
			DashboardInfo,
			DashboardContent
		},
		data() {
			return {
				task: {
					total: 3,
					list: [
						{
							id: 1,
							name: "Do something awesome!",
							status: {
								done: false
							}
						},
						{
							id: 2,
							name: "Buy toilet paper",
							status: {
								done: false
							}
						},
						{
							id: 3,
							name: "Learn Vue",
							status: {
								done: false
							}
						}
					]
				},
			};
		},
		mounted() {
			this.getTaskListLocalStorage();
		},
		watch: {
			'task.list': {
				handler() {
					this.updateTaskListLocalStorage();
				},
				deep: true,
			}
		},
		computed: {
			getTotalTasks() {
				return this.task.list.length;
			},
			getTotalTasksDone() {
				return this.task.list.filter(task => task.status.done).length;
			}
		},
		methods: {
			addTask(taskName, taskTotal) {
				const taskNameFormatted = taskName.trim();

				if (taskNameFormatted) {
					this.task.list.push({
						id: taskTotal,
						name: taskNameFormatted,
						status: {
							done: false
						}
					});
				}
			},
			removeTask(index) {
				this.task.list.splice(index, 1);
			},
			changeTaskDone(index) {
				const task = this.task.list[index];
				task.status.done = !task.status.done;
			},
			removeTaskListDone() {
				this.task.list = this.task.list.filter(task => !task.status.done);
			},
			removeTaskList() {
				this.task.list = [];
			},
			getTaskListLocalStorage() {
				if (localStorage.getItem('tasks')) {
					try {
						this.task.list = JSON.parse(localStorage.getItem('tasks'));
					} catch (e) {
						localStorage.removeItem('tasks');
					}
				} else {
					this.updateTaskListLocalStorage();
				}
			},
			updateTaskListLocalStorage() {
				localStorage.setItem('tasks', JSON.stringify(this.task.list));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard {
		width: 80%;
		max-width: 50rem;
		margin: 0 auto 6rem;
		position: relative;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;
	}
</style>