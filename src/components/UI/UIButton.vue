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
		"name": "UIButton",
		"props": {
			"buttonHref": {
				"type": String,
				"default": null,
			},
			"buttonTo": {
				"type": String,
				"default": null,
			},
			"buttonValue": {
				"type": String,
				"default": null,
			},
		},
		"computed": {
			checkTag() {
				if (this.href) {
					return "a";
				} else if (this.value) {
					return "input";
				} else if (this.to) {
					return "router-link";
				}

				return "button";
			},
		},
		"methods": {
			buttonClick(event) {
				this.$emit("button-click", event);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.2rem 2rem;
		border: 0.1rem solid transparent;
		outline: none;
		background-color: transparent;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 110%;
		text-transform: capitalize;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
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
			transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
				border-color 0.15s ease-in-out 0s;
		}

		&--small {
			padding: 0.5rem 0.8rem;
			font-size: 1.5rem;
		}

		&--bg-color {
			background-color: $color-brand-1;
			color: $color-white;

			&:hover {
				background-color: mix($color-black, $color-brand-1, 15%);
				color: $color-white;
			}

			&-1 {
				background-color: $color-brand-1;
				color: $color-black;

				&:hover {
					background-color: mix($color-black, $color-brand-1, 15%);
				}
			}

			&-2 {
				background-color: $color-brand-2;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-2, 15%);
				}
			}

			&-3 {
				background-color: $color-brand-3;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-3, 15%);
				}
			}

			&-error {
				background-color: $color-error;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-error, 15%);
				}
			}

			&-success {
				background-color: $color-success;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-success, 15%);
				}
			}
		}

		&--line-color {
			border-color: $color-brand-1;
			color: $color-brand-1;

			&:hover {
				border-color: $color-brand-1;
				background-color: $color-brand-1;
				color: $color-white;
			}

			&-1 {
				border-color: $color-brand-1;
				color: $color-brand-1;

				&:hover {
					border-color: $color-brand-1;
					background-color: $color-brand-1;
					color: $color-white;
				}
			}

			&-2 {
				border-color: $color-brand-2;
				color: $color-brand-2;

				&:hover {
					border-color: $color-brand-2;
					background-color: $color-brand-2;
					color: $color-white;
				}
			}

			&-3 {
				border-color: $color-brand-3;
				color: $color-brand-3;

				&:hover {
					border-color: $color-brand-3;
					background-color: $color-brand-3;
					color: $color-white;
				}
			}

			&-error {
				border-color: $color-error;
				color: $color-error;

				&:hover {
					border-color: $color-error;
					background-color: $color-error;
					color: $color-white;
				}
			}

			&-success {
				border-color: $color-success;
				color: $color-success;

				&:hover {
					border-color: $color-success;
					background-color: $color-success;
					color: $color-white;
				}
			}
		}

		&--bg-white {
			background-color: $color-white;
			color: $color-black;

			&:hover {
				background-color: $color-black;
				color: $color-white;
			}
		}

		&--line-white {
			border-color: $color-white;
			color: $color-white;

			&:hover {
				border-color: $color-white;
				background-color: $color-white;
				color: $color-black;
			}
		}

		&--bg-black {
			background-color: $color-black;
			color: $color-white;

			&:hover {
				background-color: $color-white;
				color: $color-black;
			}
		}

		&--line-black {
			border-color: $color-black;
			color: $color-black;

			&:hover {
				background-color: $color-black;
				color: $color-white;
			}
		}
	}
</style>
