<template>
	<transition-group
		name="list-item"
		tag="ul"
	>
		<li
			v-for="(task, index) in tasks"
			:key="task.id"
			v-bind:class="{'done': task.status}"
			class="task"
		>
			<div
				@click="task.status = !task.status"
				class="task__checkbox"
			>
				<font-awesome-icon icon="check-circle" />
			</div>
			<span class="task__title">{{task.title}}</span>
			<div
				@click="taskRemoveEmit(index)"
				class="task__button-remove"
			>
				<font-awesome-icon icon="trash" />
			</div>
		</li>
	</transition-group>
</template>


<script>
	export default {
		props: ["tasks"],
		methods: {
			taskRemoveEmit(index) {
				this.$emit("remove", index);
			}
		}
	};
</script>


<style lang="scss">
	.task {
		display: flex;
		align-items: center;
		line-height: 1;
		user-select: none;

		&:not(:last-child) {
			padding-bottom: 15px;
		}

		&:hover {
			cursor: text;

			.task {
				&__button-remove {
					opacity: 1;
					cursor: pointer;
				}
			}
		}

		&.done {
			.task {
				&__title {
					color: $color-silver;

					&:before {
						width: 100%;
					}
				}
				&__checkbox {
					color: $color-silver;
				}
			}
		}

		&__title {
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

		&__checkbox {
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