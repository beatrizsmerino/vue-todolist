<template>
	<transition-group
		class="task-list"
		name="task-list"
		tag="ul"
	>
		<li
			v-for="(task, index) in tasks"
			:key="task.id"
			class="task-list__item"
		>
			<div
				class="task"
				v-bind:class="{'is-done': task.status}"
			>
				<div
					@click="taskStatusChange(index)"
					class="task__button-done"
				>
					<font-awesome-icon icon="check-circle" />
				</div>
				<span class="task__name">
					{{ task.name }}
				</span>
				<div
					@click="taskRemoveEmit(index)"
					class="task__button-remove"
				>
					<font-awesome-icon icon="trash" />
				</div>
			</div>
		</li>
	</transition-group>
</template>


<script>
	export default {
		name: 'TaskList',
		props: {
			tasks: {
				type: Array,
				required: true
			}
		},
		methods: {
			taskRemoveEmit(index) {
				this.$emit("remove", index);
			},
			taskStatusChange(index) {
				const task = this.tasks[index];
				task.status = !task.status;
			}
		}
	};
</script>


<style lang="scss">
	.task-list {
		list-style: none;
		padding: 25px;

		&__item {
			&:not(:last-child) {
				margin-bottom: 15px;
			}

			/* Vue animation 'task-list' for the item transition */
			&.task-list-enter-active,
			&.task-list-leave-active {
				transition: opacity 0.3s, transform 0.3s;
				transform-origin: left center;
			}

			&.task-list-enter,
			&.task-list-leave-to {
				opacity: 0;
				transform: scale(0.5);
			}

			&.task-list-leave-active {
				position: absolute;
			}

			&.task-list-move {
				transition: transform 0.4s linear 0.3;
			}
		}
	}

	.task {
		display: flex;
		align-items: center;
		line-height: 1;
		user-select: none;

		&:hover {
			cursor: text;

			.task {
				&__button-remove {
					opacity: 1;
					cursor: pointer;
				}
			}
		}

		&.is-done {
			.task {
				&__name {
					color: $color-silver;

					&:before {
						width: 100%;
					}
				}

				&__button-done {
					color: $color-silver;
				}
			}
		}

		&__name {
			position: relative;
			transition: all 0.2s ease-in-out;

			&:before {
				transition: all 0.2s ease-in-out;
				content: "";
				height: 1px;
				background-color: $color-silver;
				width: 0%;
				top: 50%;
				position: absolute;
				left: 0;
			}
		}

		&__button-done {
			width: 20px;
			height: 20px;
			margin-right: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.5rem;
			color: $color-success;
			opacity: 1;
			transition: all 0.2s ease-in-out;
			cursor: pointer;

			&:hover {
				cursor: pointer;
				color: mix($color-black, $color-success, 20%);
			}
		}

		&__button-remove {
			margin-left: auto;
			padding-left: 15px;
			opacity: 0;
			color: $color-error;
			transition: all 0.2s ease-in-out;
			font-size: 1.2rem;

			&:hover {
				cursor: pointer;
				color: mix($color-black, $color-error, 20%);
			}
		}
	}
</style>