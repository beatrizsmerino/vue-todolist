<template>
	<div
		class="task"
		v-bind:class="{'is-done': taskItem.status}"
	>
		<div
			@click="taskStatusEmit(taskIndex)"
			class="task__button-done"
		>
			<font-awesome-icon icon="check-circle" />
		</div>
		<span class="task__name">
			{{ taskItem.name }}
		</span>
		<div
			@click="taskRemoveEmit(taskIndex)"
			class="task__button-remove"
		>
			<font-awesome-icon icon="trash" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TaskPreview',
		props: {
			taskItem: {
				type: Object,
				required: true
			},
			taskIndex: {
				type: Number,
				required: true
			}
		},
		methods: {
			taskRemoveEmit(index) {
				this.$emit("remove", index);
			},
			taskStatusEmit(index) {
				this.$emit("status", index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.task {
		padding: 1rem;
		display: flex;
		align-items: center;
		line-height: 1;
		user-select: none;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.3rem rgba($color-black, 0.4);

		&:hover {
			background-color: $color-ghost;

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
			font-size: 1.5rem;
			transition: all 0.2s ease-in-out;

			&:before {
				transition: all 0.2s ease-in-out;
				content: "";
				height: 0.1rem;
				background-color: $color-silver;
				width: 0%;
				top: 50%;
				position: absolute;
				left: 0;
			}
		}

		&__button-done {
			width: 2rem;
			height: 2rem;
			margin-right: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 2.4rem;
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
			padding-left: 1.5rem;
			opacity: 0;
			color: $color-error;
			transition: all 0.2s ease-in-out;
			font-size: 2rem;

			&:hover {
				cursor: pointer;
				color: mix($color-black, $color-error, 20%);
			}
		}
	}
</style>