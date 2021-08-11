<template>
	<div class="task-new">
		<input
			v-model="taskNew.name"
			@keyup.enter="emitAddTask()"
			class="task-new__input"
			type="text"
			placeholder="New task"
			autofocus
		/>
		<Button
			class="task-new__button-add button--icon"
			@button-click="emitAddTask()"
		>
			<span class="button__icon">
				<i class="icon">
					<FontAwesomeIcon icon="plus-circle" />
				</i>
			</span>
		</Button>
	</div>
</template>


<script>
	import Button from '@/components/UI/Button.vue'

	export default {
		name: 'TaskNew',
		components: {
			Button
		},
		props: {
			taskList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				taskNew: {
					name: ''
				},
				taskListNew: {
					total: this.taskList.length + 1
				}
			};
		},
		methods: {
			cleanTaskNew() {
				this.taskNew.name = "";
			},
			incrementTaskListTotal() {
				this.taskListNew.total++;
			},
			emitAddTask() {
				this.$emit("task-add", this.taskNew.name, this.taskListNew.total);
				this.incrementTaskListTotal();
				this.cleanTaskNew();
			},
		}
	};
</script>


<style lang="scss" scoped>
	.task-new {
		background-color: rgba($color-black, 0.05);
		padding: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;

		&__input {
			border: none;
			outline: none;
			margin-right: 1rem;
			padding: 1.2rem 1.6rem;
			flex: 1;
			font-size: 1.6rem;
			border-left: 0.5rem solid $color-brand-3;
			font-family: "Roboto", sans-serif;

			&::placeholder {
				color: $color-gray;
			}
		}

		&__button-add {
			width: 3.5rem;
			height: 3.5rem;
			color: $color-brand-3;
			font-size: 3.6rem;

			&:hover {
				color: mix($color-black, $color-brand-3, 20%);
			}
		}
	}
</style>
