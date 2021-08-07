<template>
	<div id="app">
		<PageTitle :title="title" />
		<div class="todo-list">
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
	</div>
</template>


<script>
	import PageTitle from "./components/Page/PageTitle.vue";
	import TaskList from "./components/Task/TaskList.vue";
	import TaskNew from "./components/Task/TaskNew.vue";

	export default {
		components: {
			PageTitle,
			TaskList,
			TaskNew
		},
		data() {
			return {
				title: "Things Todo",
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
	};
</script>


<style lang="scss">
	// @import url("https://fonts.googleapis.com/css?family=Kristi|Roboto");

	* {
		padding: 0;
		margin: 0;
	}

	html {
		width: 100%;
		height: 100%;
		font-size: 10px;
	}

	body {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
		background: linear-gradient(
			to bottom,
			$color-brand-1 0%,
			$color-brand-2 100%
		);
	}

	::placeholder {
		color: rgba($color-black, 0.3);
	}

	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}

	.todo-list {
		width: 80%;
		max-width: 50rem;
		margin: 0 auto;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;
	}
</style>
