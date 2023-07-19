<template>
	<div class="dashboard">
		<DashboardInfo />
		<DashboardContent />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import DashboardInfo from "@/components/Dashboard/DashboardInfo.vue";
	import DashboardContent from "@/components/Dashboard/DashboardContent.vue";

	export default {
		"name": "Dashboard",
		"components": {
			DashboardInfo,
			DashboardContent,
		},
		"computed": {
			...mapGetters([
				"getTaskList",
			]),
		},
		"watch": {
			"getTaskList": {
				handler() {
					this.createTaskListLocalStorage();
				},
				"deep": true,
			},
		},
		mounted() {
			this.checkTaskListLocalStorage();
		},
		"methods": {
			...mapActions([
				"checkTaskListLocalStorage",
				"createTaskListLocalStorage",
			]),
		},
	};
</script>

<style lang="scss" scoped>
	.dashboard {
		position: relative;
		width: 80%;
		max-width: 50rem;
		margin: 0 auto 3rem;
		overflow: hidden;
		transition: 0.5s ease-in-out 0s;
		background-color: $color-white;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);

		@include media("md") {
			width: 100%;
			max-width: inherit;
		}
	}
</style>
