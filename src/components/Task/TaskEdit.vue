<template>
	<section class="task-edit">
		<h3 class="task-edit__title">
			Edit task
		</h3>
		<div class="task-edit__content">
			<article class="task-edit__item">
				<label class="task-edit__subtitle">
					Task name
				</label>
				<input
					v-model="taskCopy.name"
					class="task-edit__field"
					type="text"
				>
			</article>

			<UIButton
				class="task-edit__button-save button--bg-color-3"
				@button-click="editTaskName(task); emitTaskEditClose();"
			>
				<span class="button__icon">
					<i class="icon">
						<FontAwesomeIcon icon="edit" />
					</i>
				</span>
				<span>
					Save
				</span>
			</UIButton>
		</div>
	</section>
</template>

<script>
	import {mapActions} from 'vuex';
	import UIButton from '@/components/UI/UIButton.vue';

	export default {
		name: 'TaskEdit',
		components: {
			UIButton
		},
		props: {
			task: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				taskCopy: this.task
			};
		},
		methods: {
			...mapActions(['updateTask']),
			editTaskName(task) {
				this.updateTask(task);
			},
			emitTaskEditClose() {
				this.$emit('task-edit-close');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.task-edit {
		&__title {
			font-size: 2.8rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}

		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__item {
			display: flex;
			flex-direction: column;

			>* {
				&:not(:last-child) {
					margin-bottom: 1.2rem;
				}
			}
		}

		&__subtitle {
			font-size: 1.8rem;
			margin-bottom: 1rem;
		}

		&__field {
			padding: 1.2rem;
			font-size: 1.5rem;
			border-radius: 0.5rem;
			border: 0.2rem solid $color-brand-3;
			background-color: $color-white;
			overflow: hidden;
		}


		&__button-save {
			max-width: 10rem;
			margin-top: 2rem;
			align-self: flex-end;
		}
	}
</style>
