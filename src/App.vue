<template>
	<div id="app">
		<PageTitle :title="title" />
		<div class="todo-list">
			<TaskList
				:tasks="tasks"
				@remove="taskRemove"
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
	}

	body {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		font-size: 15px;
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
		max-width: 500px;
		margin: 0 auto;
		box-shadow: -2px 2px 2px -1px rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;

		ul {
			list-style: none;
			padding: 25px;
		}
	}

	/* Vue List Item transition */

	.list-item-enter-active,
	.list-item-leave-active {
		transition: opacity 0.3s, transform 0.3s;
		transform-origin: left center;
	}

	.list-item-enter,
	.list-item-leave-to {
		opacity: 0;
		transform: scale(0.5);
	}

	.list-item-leave-active {
		position: absolute;
	}

	.list-item-move {
		transition: transform 0.4s linear 0.3;
	}
</style>
