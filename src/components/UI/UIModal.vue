<template>
	<div class="modal">
		<slot name="modalButtonOpen" />
		<div class="modal__overlay">
			<div class="modal__box">
				<UIButton
					class="modal__button-close button--line-black button--small"
					@button-click="emitCloseModal()"
				>
					<span class="button__icon">
						<i class="icon">
							<FontAwesomeIcon icon="times" />
						</i>
					</span>
				</UIButton>
				<slot name="modalInner" />
			</div>
		</div>
	</div>
</template>

<script>
	import UIButton from "@/components/UI/UIButton.vue";

	export default {
		"name": "UIModal",
		"components": {
			UIButton,
		},
		"methods": {
			emitCloseModal() {
				this.$emit("modal-close");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal {
		&__overlay {
			display: flex;
			position: fixed;
			z-index: 999999;
			top: 0;
			left: 0;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			opacity: 0;
			background: rgba($color-black, 0.7);
			pointer-events: none;
		}

		&__button-close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			border-radius: 50%;
		}

		&__box {
			position: relative;
			width: 100%;
			max-width: 40rem;
			padding: 3rem;
			border-radius: 0.5rem;
			background-color: $color-white;
			font-size: 1.6rem;
		}

		&.is-open {
			.modal {
				&__overlay {
					opacity: 1;
					pointer-events: all;
				}
			}
		}
	}
</style>
