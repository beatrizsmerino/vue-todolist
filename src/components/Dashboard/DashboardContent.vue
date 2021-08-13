<template>
	<div class="dashboard-content">
		<TaskList
			ref="taskList"
			:task-list="taskList"
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