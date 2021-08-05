<template>
	<div id="app">
		<page-title :title="title" />
		<div class="todo-list">
			<tasks-list
				:tasks="tasks"
				@remove="taskRemove"
			></tasks-list>
			<task-new
				:tasks="tasks"
				@add="taskAdd"
			></task-new>
		</div>
	</div>
</template>


<script>
	import PageTitle from "./components/ComponentTitle.vue";
	import TasksList from "./components/ComponentTasksList.vue";
	import TaskNew from "./components/ComponentTaskNew.vue";

	export default {
		components: {
			PageTitle,
			TasksList,
			TaskNew
		},
		data() {
			return {
				title: "Things Todo",
				tasks: [
					{
						id: 1,
						title: "Do something awesome!",
						status: false
					},
					{
						id: 2,
						title: "Buy toilet paper",
						status: false
					},
					{
						id: 3,
						title: "Learn Vue",
						status: false
					}
				],
			};
		},
		mounted() {
			if (localStorage.getItem('tasks')) {
				try {
					this.tasks = JSON.parse(localStorage.getItem('tasks'));
				} catch (e) {
					localStorage.removeItem('tasks');
				}
			}
		},
		watch: {
			tasks: {
				handler() {
					localStorage.setItem('tasks', JSON.stringify(this.tasks));
				},
				deep: true,
			}
		},
		methods: {
			taskAdd(name, count) {
				const title = name.trim();

				if (title) {
					this.tasks.push({
						id: count,
						title: title,
						status: false
					});
				}
			},
			taskRemove(index) {
				this.tasks.splice(index, 1);
			},
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
		background: linear-gradient(to bottom, #9cedff 0%, #3e82c3 100%);
	}

	::placeholder {
		color: rgba(0, 0, 0, 0.3);
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
		box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.15);
		background: white;
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
