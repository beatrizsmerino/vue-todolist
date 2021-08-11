<template>
	<div class="dashboard-content">
		<TaskList
			ref="taskList"
			:task-list="taskList"
			@task-remove="emitRemoveTask"
			@task-done="emitTaskDone"
		/>
		<TaskNew
			:task-list="taskList"
			@task-add="emitTaskAdd"
		/>
	</div>
</template>

<script>
	import TaskList from "@/components/Task/TaskList.vue";
	import TaskNew from "@/components/Task/TaskNew.vue";

	export default {
		name: 'DashboardContent',
		components: {
			TaskList,
			TaskNew
		},
		props: {
			taskList: {
				type: Array,
				required: true
			}
		},
		methods: {
			emitRemoveTask(index) {
				this.$emit("task-remove", index);
			},
			emitTaskDone(index) {
				this.$emit("task-done", index);
			},
			emitTaskAdd(taskName, taskTotal) {
				this.$emit("task-add", taskName, taskTotal);
				this.$refs.taskList.scrollToBottom();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard-content {
	}
</style>