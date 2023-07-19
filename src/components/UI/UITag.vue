<template>
	<div
		class="tag"
		:class="{ 'tag--value-number': typeof tagValue == 'number' }"
	>
		<span class="tag__name">
			{{ tagName }}
		</span>
		<span class="tag__value">
			{{ tagValue }}
		</span>
	</div>
</template>

<script>
	export default {
		"name": "UITag",
		"props": {
			"tagName": {
				"type": String,
				"required": true,
			},
			"tagValue": {
				"type": [
					String,
					Number,
				],
			},
		},
	};
</script>

<style lang="scss" scoped>
	.tag {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.2rem 0.2rem 1rem;
		border-radius: 2rem;
		background-color: $color-brand-3;

		&__name {
			margin-right: 0.5rem;
			color: $color-white;
			font-weight: 600;
		}

		&__value {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.2rem 0.5rem;
			border-radius: 2rem;
			background-color: $color-white;
			color: $color-brand-3;
			font-weight: 600;
			text-align: center;
		}

		&--value-number {
			.tag {
				&__value {
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
				}
			}
		}
	}
</style>
