<template>
	<div
		class="task-preview"
		v-bind:class="{'is-done': taskItem.status.done}"
	>
		<Button
			class="task-preview__button-done button--icon"
			@button-click="emitTaskDone(taskIndex)"
		>
			<span class="button__icon">
				<i class="icon">
					<FontAwesomeIcon icon="check-circle" />
				</i>
			</span>
		</Button>
		<p class="task-preview__name">
			{{ taskItem.name }}
		</p>
		<Button
			class="task-preview__button-remove button--icon"
			@button-click="emitRemoveTask(taskIndex)"
		>
			<span class="button__icon">
				<i class="icon">
					<FontAwesomeIcon icon="trash" />
				</i>
			</span>
		</Button>
	</div>
</template>

<script>
	import Button from '@/components/UI/Button.vue'

	export default {
		name: 'TaskPreview',
		components: {
			Button
		},
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
			emitRemoveTask(index) {
				this.$emit("task-remove", index);
			},
			emitTaskDone(index) {
				this.$emit("task-done", index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.task-preview {
		padding: 1rem;
		display: flex;
		align-items: center;
		line-height: 1;
		user-select: none;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.3rem rgba($color-black, 0.4);

		&:hover {
			background-color: $color-ghost;

			.task-preview {
				&__button-remove {
					opacity: 1;
					cursor: pointer;
				}
			}
		}

		&.is-done {
			.task-preview {
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
			width: calc(100% - 10rem);
			position: relative;
			font-size: 1.5rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			transition: all 0.2s ease-in-out;

			&:before {
				content: "";
				width: 0%;
				height: 0.1rem;
				position: absolute;
				top: 50%;
				left: 0;
				background-color: $color-silver;
				transition: all 0.2s ease-in-out;
			}
		}

		&__button-done {
			margin-right: 1.5rem;
			font-size: 2.4rem;
			color: $color-success;
			opacity: 1;

			&:hover {
				color: mix($color-black, $color-success, 20%);
			}
		}

		&__button-remove {
			margin-left: auto;
			color: $color-error;
			font-size: 2rem;
			opacity: 0;

			&:hover {
				color: mix($color-black, $color-error, 20%);
			}
		}
	}
</style>