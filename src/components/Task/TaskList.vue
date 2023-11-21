<template>
	<div
		ref="taskListWrapper"
		class="task-list__wrapper"
	>
		<transition-group
			v-if="getTotalTaskList !== 0"
			class="task-list"
			name="task-list"
			tag="ul"
		>
			<li
				v-for="item in getTaskList"
				:key="item.id"
				class="task-list__item"
			>
				<TaskPreview :task-item="item" />
			</li>
		</transition-group>
		<div
			v-else
			class="task-list__message"
		>
			<p>Your task list is empty</p>

			<UIIcon name="emptyTasks" />
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import TaskPreview from "@/components/Task/TaskPreview.vue";

	export default {
		"name": "TaskList",
		"components": {
			TaskPreview,
		},
		"computed": {
			...mapGetters([
				"getTaskList",
				"getTotalTaskList",
			]),
		},
		mounted() {
			this.scrollToBottom();
		},
		"methods": {
			scrollToBottom() {
				this.$nextTick(() => {
					const element = this.$refs.taskListWrapper;
					element.scrollTop = element.scrollHeight;
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.task-list {
		display: flex;
		position: relative;
		flex-direction: column;
		list-style: none;

		&__wrapper {
			height: calc(5.6rem * 3);
			margin: 2rem;
			overflow-y: scroll;
		}

		&__item {
			padding: 0.5rem;

			/* Vue animation 'task-list' for the item transition */
			&.task-list-enter-active,
			&.task-list-leave-active {
				transform-origin: left center;
				transition: opacity 0.3s, transform 0.3s;
			}

			&.task-list-enter,
			&.task-list-leave-to {
				transform: scale(0.5);
				opacity: 0;
			}

			&.task-list-leave-active {
				position: absolute;
			}

			&.task-list-move {
				transition: transform 0.4s linear 0.3;
			}
		}

		&__message {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			color: $color-light;
			font-size: 2rem;
			line-height: 100%;
			text-align: center;

			> * {
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}

			:deep(.icon) {
				width: 15rem;
				height: 10rem;
			}
		}
	}
</style>
