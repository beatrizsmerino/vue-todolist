<template>
	<div class="task-list__wrapper">
		<transition-group
			class="task-list"
			name="task-list"
			tag="ul"
		>
			<li
				v-for="(item, index) in tasks"
				:key="item.id"
				class="task-list__item"
			>
				<Task
					:task="item"
					:index="index"
					@remove="taskRemoveEmit"
					@status="taskStatusEmit"
				/>
			</li>
		</transition-group>
	</div>
</template>


<script>
	import Task from './Task.vue'

	export default {
		name: 'TaskList',
		components: {
			Task
		},
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
			taskStatusEmit(index) {
				this.$emit("status", index);
			}
		}
	};
</script>


<style lang="scss">
	.task-list {
		height: 130px;
		position: relative;
		display: flex;
		flex-direction: column;
		list-style: none;

		&__wrapper {
			margin: 25px;
			overflow-y: scroll;
		}

		&__item {
			&:not(:last-child) {
				margin-bottom: 5px;
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
</style>