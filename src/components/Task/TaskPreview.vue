<template>
	<div
		class="task-preview"
		:class="{
			'is-done': taskItem.status.done,
			'is-show': taskItem.status.show,
		}"
	>
		<UIButton
			class="task-preview__button-done button--icon"
			@button-click="changeTaskDone(taskItem)"
		>
			<span class="button__icon">
				<i class="icon">
					<FontAwesomeIcon icon="check-circle" />
				</i>
			</span>
		</UIButton>
		<div class="task-preview__name">
			<p>
				{{ taskItem.name }}
			</p>
		</div>
		<ul class="task-preview__tools">
			<li>
				<UIModal
					:class="{ 'is-open': taskItem.status.show }"
					@modal-close="hideTask(taskItem)"
				>
					<template #modalButtonOpen>
						<UIButton
							class="task-preview__button-edit button--icon"
							@button-click="showTask(taskItem)"
						>
							<span class="button__icon">
								<i class="icon">
									<FontAwesomeIcon icon="edit" />
								</i>
							</span>
						</UIButton>
					</template>
					<template #modalInner>
						<TaskEdit
							:task="taskItem"
							@task-edit-close="hideTask(taskItem)"
						/>
					</template>
				</UIModal>
			</li>
			<li>
				<UIButton
					class="task-preview__button-remove button--icon"
					@button-click="removeTask(taskItem.id)"
				>
					<span class="button__icon">
						<i class="icon">
							<FontAwesomeIcon icon="trash" />
						</i>
					</span>
				</UIButton>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import UIButton from "@/components/UI/UIButton.vue";
	import UIModal from "@/components/UI/UIModal.vue";
	import TaskEdit from "@/components/Task/TaskEdit.vue";

	export default {
		"name": "TaskPreview",
		"components": {
			UIButton,
			UIModal,
			TaskEdit,
		},
		"props": {
			"taskItem": {
				"type": Object,
				"required": true,
			},
		},
		"methods": {
			...mapActions([
				"removeTask",
				"updateTask",
			]),
			changeTaskDone(task) {
				task.status.done = !task.status.done;
				this.updateTask(task);
			},
			showTask(task) {
				task.status.show = true;
				this.updateTask(task);
			},
			hideTask(task) {
				task.status.show = false;
				this.updateTask(task);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.task-preview {
		display: flex;
		align-items: center;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.3rem rgba($color-black, 0.4);
		line-height: 1;
		user-select: none;

		&__name {
			max-width: calc(100% - 10rem);
			transition: all 0.2s ease-in-out;
			font-size: 1.5rem;

			p {
				display: inline-block;
				position: relative;
				width: 100%;
				overflow: hidden;
				line-height: 150%;
				text-overflow: ellipsis;
				white-space: nowrap;

				&:before {
					content: "";
					position: absolute;
					top: 50%;
					left: 0;
					width: 0%;
					height: 0.2rem;
					transition: all 0.2s ease-in-out;
					background-color: $color-black;
				}
			}
		}

		&__button-done {
			margin-right: 1.5rem;
			opacity: 1;
			color: $color-silver;
			font-size: 2.4rem;

			&:hover {
				color: mix($color-black, $color-silver, 20%);
			}
		}

		&__tools {
			display: flex;
			margin-left: auto;
			opacity: 0;
			list-style: none;

			> * {
				&:not(:last-child) {
					margin-right: 1.2rem;
				}
			}
		}

		&__button-edit,
		&__button-remove {
			font-size: 2rem;
		}

		&__button-edit {
			color: $color-brand-3;

			&:hover {
				color: mix($color-black, $color-brand-3, 20%);
			}
		}

		&__button-remove {
			color: $color-error;

			&:hover {
				color: mix($color-black, $color-error, 20%);
			}
		}

		&:hover {
			background-color: $color-ghost;

			.task-preview {
				&__tools {
					opacity: 1;
					cursor: pointer;
				}
			}
		}

		&.is-done {
			.task-preview {
				&__name {
					p {
						&:before {
							width: 100%;
						}
					}
				}

				&__button-done {
					color: $color-success;

					&:hover {
						color: mix($color-black, $color-success, 20%);
					}
				}
			}
		}

		&.is-show {
			.task-preview {
				&__tools {
					opacity: 1;
				}
			}
		}
	}
</style>
