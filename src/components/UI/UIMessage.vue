<template>
	<div
		class="message"
		:class="{ 'is-close': isClose }"
	>
		<div class="message__inner">
			<div class="message__content">
				<slot />
			</div>
			<UIButton
				v-if="!isClose"
				class="message__button button--bg-black button--icon"
				@button-click="closeMessage()"
			>
				<span class="button__icon">
					<i class="icon">
						<FontAwesomeIcon icon="times" />
					</i>
				</span>
			</UIButton>
			<UIButton
				v-else
				class="message__button button--bg-black button--icon"
				@button-click="openMessage()"
			>
				<span class="button__icon">
					<i class="icon">
						<FontAwesomeIcon icon="info" />
					</i>
				</span>
			</UIButton>
		</div>
	</div>
</template>

<script>
	import UIButton from "@/components/UI/UIButton.vue";

	export default {
		"name": "UIMessage",
		"components": {
			UIButton,
		},
		data() {
			return {
				"isClose": false,
			};
		},
		"methods": {
			openMessage() {
				this.isClose = false;
			},
			closeMessage() {
				this.isClose = true;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.message {
		position: absolute;
		z-index: 999;
		right: 3rem;
		bottom: 3rem;
		max-width: 60rem;
		transition: all 0.3s ease-in-out 0s;
		border-radius: 3rem;
		background-color: $color-brand-4;
		box-shadow: 0 0.1rem 0.4rem 0.1rem rgba($color-black, 0.6);

		@include media("md") {
			max-width: calc(100% - 3rem * 2);
		}

		@include media("sm") {
			display: flex;
			position: relative;
			right: inherit;
			bottom: inherit;
			max-width: inherit;
			float: right;
		}

		@include media("md", "max", "height") {
			display: flex;
			position: relative;
			right: inherit;
			bottom: inherit;
			max-width: inherit;
			float: right;
		}

		&__inner {
			display: flex;
			position: relative;
			align-items: center;
			justify-content: flex-end;
			margin: 0.4rem;
		}

		&__button {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
		}

		&__content {
			width: calc(100% - 2.5rem);
			max-height: 5rem;
			padding: 0.5rem 3rem 0.5rem 2.5rem;
			overflow: hidden;
			transition: all 0.5s ease-in-out 0.3s;
			color: $color-white;
			font-size: 1.5rem;
			font-weight: 600;
			line-height: 100%;

			@include media("sm") {
				font-size: 1.2rem;
			}

			@include media("xs") {
				font-size: 3vw;
			}
		}

		&.is-close {
			.message {
				&__content {
					z-index: -1;
					width: 0;
					max-height: 0;
					padding: 0;
					opacity: 0;
				}
			}
		}
	}
</style>
