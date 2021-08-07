<template>
	<div class="task-new">
		<input
			v-model="taskNew"
			@keyup.enter="emitAddTask()"
			class="task-new__input"
			type="text"
			placeholder="New task"
			autofocus
		/>
		<button
			class="task-new__button-add"
			@click="emitAddTask()"
		>
			<font-awesome-icon icon="plus-circle" />
		</button>
	</div>
</template>


<script>
	export default {
		name: 'TaskNew',
		data() {
			return {
				taskNew: "",
				count: this.taskList.length + 1
			};
		},
		props: {
			taskList: {
				type: Array,
				required: true
			}
		},
		methods: {
			emitAddTask() {
				this.$emit("task-add", this.taskNew, this.count);
				this.count++;
				this.taskNew = ""
			},
		}
	};
</script>


<style lang="scss">
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
			border-left: 0.5rem solid $color-brand-2;
			font-family: "Roboto", sans-serif;
		}

		&__button-add {
			outline: none;
			border: none;
			background-color: transparent;
			width: 3.5rem;
			height: 3.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 3.6rem;
			color: $color-brand-2;
			transition: all 0.15s ease-in-out;

			&:hover {
				cursor: pointer;
				color: mix($color-black, $color-brand-2, 20%);
			}
		}
	}
</style>
