<template>
	<component
		:is="checkTag"
		:href="buttonHref"
		:to="buttonTo"
		:value="buttonValue"
		class="button"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			buttonHref: {
				type: String,
				default: null
			},
			buttonTo: {
				type: String,
				default: null
			},
			buttonValue: {
				type: String,
				default: null
			}
		},
		computed: {
			checkTag() {
				if (this.href) {
					return 'a';
				} else if (this.value) {
					return 'input';
				} else if (this.to) {
					return 'router-link';
				}

				return 'button';
			}
		},
		methods: {
			buttonClick(event) {
				this.$emit('button-click', event);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.2rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 110%;
		border: 0.1rem solid transparent;
		outline: none;
		background-color: transparent;
		user-select: none;
		cursor: pointer;
		appearance: none;

		> * {
			pointer-events: none;

			&:not(:last-child) {
				margin-right: 1rem;
			}

			&:only-child {
				margin-right: 0;
			}
		}

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;

			.icon {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		&--icon {
			padding: 0;
		}

		&:not(.button--icon) {
			transition: color 0.15s ease-in-out 0s,
				background-color 0.15s ease-in-out 0s,
				border-color 0.15s ease-in-out 0s;
		}

		&--small {
			padding: 0.5rem 0.8rem;
			font-size: 1.5rem;
		}

		&--bg-color {
			color: $color-white;
			background-color: $color-brand-1;

			&:hover {
				color: $color-white;
				background-color: mix($color-black, $color-brand-1, 15%);
			}

			&-1 {
				color: $color-black;
				background-color: $color-brand-1;

				&:hover {
					background-color: mix($color-black, $color-brand-1, 15%);
				}
			}

			&-2 {
				color: $color-white;
				background-color: $color-brand-2;

				&:hover {
					background-color: mix($color-black, $color-brand-2, 15%);
				}
			}

			&-3 {
				color: $color-white;
				background-color: $color-brand-3;

				&:hover {
					background-color: mix($color-black, $color-brand-3, 15%);
				}
			}

			&-error {
				color: $color-white;
				background-color: $color-error;

				&:hover {
					background-color: mix($color-black, $color-error, 15%);
				}
			}

			&-success {
				color: $color-white;
				background-color: $color-success;

				&:hover {
					background-color: mix($color-black, $color-success, 15%);
				}
			}
		}

		&--line-color {
			color: $color-brand-1;
			border-color: $color-brand-1;

			&:hover {
				color: $color-white;
				border-color: $color-brand-1;
				background-color: $color-brand-1;
			}

			&-1 {
				color: $color-brand-1;
				border-color: $color-brand-1;

				&:hover {
					color: $color-white;
					border-color: $color-brand-1;
					background-color: $color-brand-1;
				}
			}

			&-2 {
				color: $color-brand-2;
				border-color: $color-brand-2;

				&:hover {
					color: $color-white;
					border-color: $color-brand-2;
					background-color: $color-brand-2;
				}
			}

			&-3 {
				color: $color-brand-3;
				border-color: $color-brand-3;

				&:hover {
					color: $color-white;
					border-color: $color-brand-3;
					background-color: $color-brand-3;
				}
			}

			&-error {
				color: $color-error;
				border-color: $color-error;

				&:hover {
					color: $color-white;
					border-color: $color-error;
					background-color: $color-error;
				}
			}

			&-success {
				color: $color-success;
				border-color: $color-success;

				&:hover {
					color: $color-white;
					border-color: $color-success;
					background-color: $color-success;
				}
			}
		}

		&--bg-white {
			color: $color-black;
			background-color: $color-white;

			&:hover {
				color: $color-white;
				background-color: $color-black;
			}
		}

		&--line-white {
			color: $color-white;
			border-color: $color-white;

			&:hover {
				color: $color-black;
				border-color: $color-white;
				background-color: $color-white;
			}
		}

		&--bg-black {
			color: $color-white;
			background-color: $color-black;

			&:hover {
				color: $color-black;
				background-color: $color-white;
			}
		}

		&--line-black {
			color: $color-black;
			border-color: $color-black;

			&:hover {
				color: $color-white;
				background-color: $color-black;
			}
		}
	}
</style>
