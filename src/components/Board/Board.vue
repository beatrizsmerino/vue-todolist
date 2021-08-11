<template>
	<div class="board">
		<div class="board-info">
			<ul class="board-info__list">
				<li class="board-info__item">
					<Tag
						tag-name="Tasks"
						:tag-value="getTotalTasks"
					/>
				</li>
				<li class="board-info__item">
					<Tag
						tag-name="Tasks Done"
						:tag-value="getTotalTasksDone"
					/>
				</li>
				<li
					v-if="getTotalTasksDone !== 0"
					class="board-info__item"
				>
					<Button
						class="button--bg-color-error button--small"
						@button-click="removeTaskListDone()"
					>
						<span class="button__icon">
							<i class="icon">
								<FontAwesomeIcon icon="trash" />
							</i>
						</span>
						<span class="button__text">
							tasks done
						</span>
					</Button>
				</li>
				<li class="board-info__item">
					<Button
						class="button--bg-color-error button--small"
						@button-click="removeTaskList()"
					>
						<span class="button__icon">
							<i class="icon">
								<FontAwesomeIcon icon="trash" />
							</i>
						</span>
						<span class="button__text">
							tasks
						</span>
					</Button>
				</li>
			</ul>
		</div>
		<div class="board-content">
			<TaskList
				ref="taskList"
				:task-list="task.list"
				@task-remove="removeTask"
				@task-done="changeTaskDone"
			/>
			<TaskNew
				:task-list="task.list"
				@task-add="addTask"
			/>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/UI/Button.vue'
	import Tag from "@/components/UI/Tag.vue";
	import TaskList from "@/components/Task/TaskList.vue";
	import TaskNew from "@/components/Task/TaskNew.vue";

	export default {
		name: 'Board',
		components: {
			Button,
			Tag,
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

					this.$refs.taskList.scrollToBottom();
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
		font-size: 1.4rem;
		background-color: $color-white;

		&__list {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			list-style: none;
		}

		&__item {
			&:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}

	.board-content {
	}
</style>