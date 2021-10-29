<template>
	<div
		ref="taskListWrapper"
		class="task-list__wrapper"
	>
		<transition-group
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
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import TaskPreview from '@/components/Task/TaskPreview.vue';

	export default {
		name: 'TaskList',
		components: {
			TaskPreview
		},
		computed: {
			...mapGetters(['getTaskList'])
		},
		mounted() {
			this.scrollToBottom();
		},
		methods: {
			scrollToBottom() {
				this.$nextTick(() => {
					const element = this.$refs.taskListWrapper;
					element.scrollTop = element.scrollHeight;
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.task-list {
		position: relative;
		display: flex;
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
</style>
