<template>
	<div class="dashboard-info">
		<ul class="dashboard-info__list">
			<li class="dashboard-info__item">
				<Tag
					tag-name="Tasks"
					:tag-value="totalTaskList"
				/>
			</li>
			<li class="dashboard-info__item">
				<Tag
					tag-name="Tasks Done"
					:tag-value="totalTaskListDone"
				/>
			</li>
		</ul>
		<ul class="dashboard-info__list">
			<li
				v-if="totalTaskListDone !== 0"
				class="dashboard-info__item"
			>
				<Button
					class="button--bg-color-error button--small"
					@button-click="removeTaskListDone()"
				>
					<span class="button__icon">
						<i class="icon">
							<FontAwesomeIcon icon="trash" />
						</i>
					</span>
					<span class="button__text">
						tasks done
					</span>
				</Button>
			</li>
			<li class="dashboard-info__item">
				<Button
					class="button--bg-color-error button--small"
					@button-click="removeTaskList()"
				>
					<span class="button__icon">
						<i class="icon">
							<FontAwesomeIcon icon="trash" />
						</i>
					</span>
					<span class="button__text">
						tasks
					</span>
				</Button>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	import Button from '@/components/UI/Button.vue';
	import Tag from '@/components/UI/Tag.vue';

	export default {
		name: 'DashboardInfo',
		components: {
			Button,
			Tag
		},
		computed: {
			...mapGetters({
				totalTaskList: 'getTotalTaskList',
				totalTaskListDone: 'getTotalTaskListDone'
			})
		},
		methods: {
			...mapActions([
				'removeTaskList',
				'removeTaskListDone'
			])
		}
	};
</script>

<style lang="scss" scoped>
	.dashboard-info {
		width: 100%;
		padding: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		font-size: 1.4rem;
		background-color: $color-ghost;

		&__list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-items: center;
			list-style: none;
		}

		&__item {
			margin: 0.5rem;
		}
	}
</style>
