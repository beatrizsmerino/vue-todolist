<template>
	<div class="board">
		<div class="board-info">
			<ul class="board-info__list">
				<li class="board-info__item">
					<span class="board-info__data-name">
						Tasks
					</span>
					<span class="board-info__data-value board-info__data-value--number">
						{{ getTotalTasks }}
					</span>
				</li>
				<li class="board-info__item">
					<span class="board-info__data-name">
						Done
					</span>
					<span class="board-info__data-value board-info__data-value--number">
						{{ getTotalTasksDone }}
					</span>
				</li>
			</ul>
		</div>
		<div class="board-content">
			<TaskList
				:task-list="task.list"
				@remove="taskRemove"
				@status="taskChange"
			/>
			<TaskNew
				:task-list="task.list"
				@add="taskAdd"
			/>
		</div>
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
				task: {
					total: 3,
					list: [
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
					]
				},
			};
		},
		mounted() {
			this.updateTaskListLocalStorage();
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
				return this.task.list.filter(task => task.status).length;
			}
		},
		methods: {
			taskAdd(name, count) {
				const nameFormatted = name.trim();

				if (name) {
					this.task.list.push({
						id: count,
						name: nameFormatted,
						status: false
					});
				}
			},
			taskRemove(index) {
				this.task.list.splice(index, 1);
			},
			taskChange(index) {
				const task = this.task.list[index];
				task.status = !task.status;
			},
			getTaskListLocalStorage() {
				if (localStorage.getItem('tasks')) {
					try {
						this.task.list = JSON.parse(localStorage.getItem('tasks'));
					} catch (e) {
						localStorage.removeItem('tasks');
					}
				}
			},
			updateTaskListLocalStorage() {
				localStorage.setItem('tasks', JSON.stringify(this.task.list));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.board {
		width: 80%;
		max-width: 50rem;
		padding-top: 3rem;
		margin: 0 auto;
		position: relative;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;
	}

	.board-info {
		width: 100%;
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		list-style: none;
		font-size: 1.4rem;
		background-color: $color-white;

		&__list {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}

		&__item {
			display: flex;
			align-items: center;

			&:not(:last-child) {
				margin-right: 2rem;
			}
		}

		&__data-name {
			margin-right: 0.5rem;
			color: $color-brand-2;
			font-weight: 500;
		}

		&__data-value {
			&--number {
				width: 2rem;
				height: 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $color-white;
				border-radius: 50%;
				background-color: $color-brand-2;
			}
		}
	}

	.board-content {
	}
</style>