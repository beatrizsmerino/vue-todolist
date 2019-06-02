<template>
	<div class="task-new">
		<input
			v-model="taskNew"
			@keyup.enter="taskAddEmit()"
			class="task-new__input"
			type="text"
			placeholder="New task">
		<button class="task-new__button" @click="taskAddEmit()">
			<span class="task-new__icon-add">+</span>
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
		background-color: rgba(0, 0, 0, 0.05);
		padding: 15px;
		display: flex;

		&__input {
			flex: 1;
			margin-right: 10px;
			padding: 5px 10px;
			border: none;
			outline: none;
			border-left: 5px solid #f65050;
			font-family: "Roboto", sans-serif;
		}

		&__button {
			outline: none;
			border: none;
			border-radius: 50%;
			font-size: 1.5rem;
			color: white;
			background: #f65050;
			display: flex;
			width: 35px;
			height: 35px;
			transition: all 0.15s ease-in-out;

			&:hover {
				cursor: pointer;
				background: #ff5c60;
			}
		}

		&__icon-add {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
