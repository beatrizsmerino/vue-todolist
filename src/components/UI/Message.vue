<template>
	<div
		class="message"
		:class="{ 'is-close': isClose }"
	>
		<div class="message__inner">
			<div class="message__content">
				<slot />
			</div>
			<Button
				v-if="!isClose"
				class="message__button-close button--bg-black button--icon"
				@button-click="closeMessage()"
			>
				<span class="button__icon">
					<i class="icon">
						<FontAwesomeIcon icon="times" />
					</i>
				</span>
			</Button>
			<Button
				v-else
				class="message__button-open button--small button--bg-color-3"
				@button-click="openMessage()"
			>
				Show info
			</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/UI/Button.vue';

	export default {
		name: 'Message',
		components: {
			Button
		},
		data() {
			return {
				isClose: false
			};
		},
		methods: {
			openMessage() {
				this.isClose = false;
			},
			closeMessage() {
				this.isClose = true;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.message {
		max-width: 60rem;
		position: fixed;
		right: 3rem;
		bottom: 3rem;
		z-index: 999;
		background-color: $color-brand-4;
		box-shadow: 0 0.1rem 0.4rem 0.1rem rgba($color-black, 0.6);

		@media (max-width: 600px) {
			max-width: calc(100% - 3rem * 2);
		}

		&__inner {
			margin: 0.4rem;
			position: relative;
			display: flex;
			align-items: center;
		}

		&__button-close {
			width: 2.5rem;
			height: 2.5rem;
			position: absolute;
			top: -1.25rem;
			right: -1.25rem;
			border-radius: 50%;
		}

		&__button-open {
			width: 10rem;
			display: inline-block;
		}

		&__content {
			padding: 2rem;
			font-size: 1.5rem;
			font-weight: 600;
			color: $color-white;
			overflow: hidden;
			transition: all 0.5s ease-in-out 0s;
		}

		&--rounded-one-line {
			border-radius: 3rem;

			.message {
				&__content {
					width: calc(100% - 2.5rem);
					padding: 0.5rem 3rem 0.5rem 2.5rem;
				}

				&__button-close {
					position: relative;
					top: inherit;
					right: inherit;
				}
			}
		}

		&--local-storage {
			position: absolute;
		}

		&.is-close {
			box-shadow: none;
			background-color: transparent;

			.message {
				&__content {
					height: 0;
					transform: translateX(100%);
					opacity: 0;
					z-index: -1;
				}
			}
		}
	}
</style>
