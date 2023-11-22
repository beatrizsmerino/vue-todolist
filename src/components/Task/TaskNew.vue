<template>
	<div class="task-new">
		<div class="task-new__field">
			<input
				v-model="taskNew.name"
				class="task-new__input"
				type="text"
				placeholder="New task"
				autofocus
				@keyup.enter="createTaskNew()"
			>
			<UIButton
				class="task-new__button-add button--icon"
				@button-click="createTaskNew()"
			>
				<span class="button__icon">
					<i class="icon">
						<FontAwesomeIcon icon="plus-circle" />
					</i>
				</span>
			</UIButton>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import UIButton from "@/components/UI/UIButton.vue";

	export default {
		"name": "TaskNew",
		"components": {
			UIButton,
		},
		data() {
			return {
				"taskNew": {
					"name": "",
				},
			};
		},
		"computed": {
			...mapGetters([
				"getTaskLast",
			]),
			createTaskId() {
				if (typeof this.getTaskLast !== "undefined") {
					return this.getTaskLast.id + 1;
				}

				return 1;
			},
			createTaskName() {
				return this.taskNew.name.trim();
			},
		},
		"methods": {
			...mapActions([
				"addTask",
			]),
			cleanTaskNew() {
				this.taskNew.name = "";
			},
			createTaskNew() {
				const taskId = this.createTaskId;
				const taskName = this.createTaskName;

				const task = {
					"id": taskId,
					"name": taskName,
				};

				if (taskName != "") {
					this.addTask(task);
				}

				this.cleanTaskNew();
				this.emitAddTask();
			},
			emitAddTask() {
				this.$emit("add-task");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.task-new {
		padding: 1.5rem 2rem;
		transition: all 0.5s ease-in-out 0s;
		background-color: $color-ghost;

		@include media("sm") {
			padding: 1.2rem;
		}

		&__field {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.8rem 1rem 0.8rem 1.5rem;
			overflow: hidden;
			transition: all 0.5s ease-in-out 0s;
			border: 0.3rem solid $color-brand-3;
			border-radius: 5rem;
			background-color: $color-white;

			@include media("md") {
				padding: 0.5rem 0.5rem 0.5rem 1.5rem;
			}

			> * {
				&:not(:last-child) {
					margin-right: 1rem;
				}
			}
		}

		&__input {
			width: 100%;
			border: 0;
			outline: none;
			color: $color-brand-3;
			font-family: $font-brand-2;
			font-size: 1.6rem;
			font-weight: 600;

			&::placeholder {
				color: $color-gray;
				font-weight: 400;
			}
		}

		&__button-add {
			transition: all 0.5s ease-in-out 0s;
			color: $color-brand-3;
			font-size: 3.6rem;

			@include media("md") {
				font-size: 3rem;
			}

			&:hover {
				color: mix($color-black, $color-brand-3, 20%);
			}
		}
	}
</style>
