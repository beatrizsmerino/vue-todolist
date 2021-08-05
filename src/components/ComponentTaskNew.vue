<template>
	<div class="task-new">
		<input
			v-model="taskNew"
			@keyup.enter="taskAddEmit()"
			class="task-new__input"
			type="text"
			placeholder="New task"
		/>
		<button
			class="task-new__button-add"
			@click="taskAddEmit()"
		>
			<font-awesome-icon icon="plus-circle" />
		</button>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				taskNew: "",
				count: this.tasks.length + 1
			};
		},
		props: ["tasks"],
		methods: {
			taskAddEmit() {
				this.$emit("add", this.taskNew, this.count);
				this.count++;
				this.taskNew = ""
			},
		}
	};
</script>


<style lang="scss">
	.task-new {
		background-color: rgba($color-black, 0.05);
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: center;

		&__input {
			border: none;
			outline: none;
			margin-right: 10px;
			padding: 0.8rem 1rem;
			flex: 1;
			font-size: 1rem;
			border-left: 5px solid $color-error;
			font-family: "Roboto", sans-serif;
		}

		&__button-add {
			outline: none;
			border: none;
			background-color: transparent;
			width: 35px;
			height: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2.3rem;
			color: $color-error;
			transition: all 0.15s ease-in-out;

			&:hover {
				cursor: pointer;
				color: $color-error--dark;
			}
		}
	}
</style>
