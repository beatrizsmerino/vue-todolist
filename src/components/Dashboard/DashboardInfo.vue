<template>
	<div class="dashboard-info">
		<ul class="dashboard-info__list">
			<li class="dashboard-info__item">
				<UITag
					tag-name="Tasks"
					:tag-value="totalTaskList"
				/>
			</li>
			<li class="dashboard-info__item">
				<UITag
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
				<UIButton
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
				</UIButton>
			</li>
			<li class="dashboard-info__item">
				<UIButton
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
				</UIButton>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import UIButton from "@/components/UI/UIButton.vue";
	import UITag from "@/components/UI/UITag.vue";

	export default {
		"name": "DashboardInfo",
		"components": {
			UIButton,
			UITag,
		},
		"computed": {
			...mapGetters({
				"totalTaskList": "getTotalTaskList",
				"totalTaskListDone": "getTotalTaskListDone",
			}),
		},
		"methods": {
			...mapActions([
				"removeTaskList",
				"removeTaskListDone",
			]),
		},
	};
</script>

<style lang="scss" scoped>
	.dashboard-info {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		width: 100%;
		padding: 0.5rem;
		background-color: $color-ghost;
		font-size: 1.4rem;

		&__list {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-end;
			list-style: none;
		}

		&__item {
			margin: 0.5rem;
		}
	}
</style>
