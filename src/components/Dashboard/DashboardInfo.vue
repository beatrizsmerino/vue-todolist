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
			<li
				v-if="totalTaskListDone !== 0"
				class="dashboard-info__item"
			>
				<Button
					class="button--bg-color-error button--small"
					@button-click="emitRemoveTaskListDone"
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
					@button-click="emitRemoveTaskList"
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
	import Button from '@/components/UI/Button.vue'
	import Tag from "@/components/UI/Tag.vue";

	export default {
		name: 'DashboardInfo',
		components: {
			Button,
			Tag
		},
		props: {
			totalTaskList: {
				type: Number,
				required: true
			},
			totalTaskListDone: {
				type: Number,
				required: true
			},
		},
		methods: {
			emitRemoveTaskList() {
				this.$emit("task-list-remove");
			},
			emitRemoveTaskListDone() {
				this.$emit("task-list-done-remove");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard-info {
		width: 100%;
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1.4rem;
		background-color: $color-white;

		&__list {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			list-style: none;
		}

		&__item {
			&:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}
</style>