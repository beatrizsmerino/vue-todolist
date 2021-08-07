<template>
	<div class="board">
		<TaskList
			:tasks="tasks"
			@remove="taskRemove"
			@status="taskChange"
		/>
		<TaskNew
			:tasks="tasks"
			@add="taskAdd"
		/>
	</div>
</template>

<script>
	import TaskList from "../Task/TaskList.vue";
	import TaskNew from "../Task/TaskNew.vue";

	export default {
		name: 'Board',
		components: {
			TaskList,
			TaskNew
		},
		data() {
			return {
				tasks: [
					{
						id: 1,
						name: "Do something awesome!",
						status: false
					},
					{
						id: 2,
						name: "Buy toilet paper",
						status: false
					},
					{
						id: 3,
						name: "Learn Vue",
						status: false
					}
				],
			};
		},
		mounted() {
			this.taskUpdateLocalStorage();
			this.taskGetLocalStorage();
		},
		watch: {
			tasks: {
				handler() {
					this.taskUpdateLocalStorage();
				},
				deep: true,
			}
		},
		methods: {
			taskAdd(name, count) {
				const nameFormatted = name.trim();

				if (name) {
					this.tasks.push({
						id: count,
						name: nameFormatted,
						status: false
					});
				}
			},
			taskRemove(index) {
				this.tasks.splice(index, 1);
			},
			taskChange(index) {
				const task = this.tasks[index];
				task.status = !task.status;
			},
			taskGetLocalStorage() {
				if (localStorage.getItem('tasks')) {
					try {
						this.tasks = JSON.parse(localStorage.getItem('tasks'));
					} catch (e) {
						localStorage.removeItem('tasks');
					}
				}
			},
			taskUpdateLocalStorage() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.board {
		width: 80%;
		max-width: 50rem;
		margin: 0 auto;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;
	}
</style>