<template>
	<div class="dashboard">
		<DashboardInfo />
		<DashboardContent />
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	import DashboardInfo from '@/components/Dashboard/DashboardInfo.vue';
	import DashboardContent from '@/components/Dashboard/DashboardContent.vue';

	export default {
		name: 'Dashboard',
		components: {
			DashboardInfo,
			DashboardContent
		},
		computed: {
			...mapGetters(['getTaskList'])
		},
		watch: {
			getTaskList: {
				handler() {
					this.createTaskListLocalStorage();
				},
				deep: true
			}
		},
		mounted() {
			this.checkTaskListLocalStorage();
		},
		methods: {
			...mapActions([
				'checkTaskListLocalStorage',
				'createTaskListLocalStorage'
			])
		}
	};
</script>

<style lang="scss" scoped>
	.dashboard {
		width: 80%;
		max-width: 50rem;
		margin: 0 auto 6rem;
		position: relative;
		box-shadow: -0.2rem 0.2rem 0.2rem -0.1rem rgba($color-black, 0.15);
		background-color: $color-white;
		overflow: hidden;

		@media (max-width: 600px) {
			width: 100%;
		}
	}
</style>
