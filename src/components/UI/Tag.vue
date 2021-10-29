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
		name: 'Tag',
		props: {
			tagName: {
				type: String,
				required: true
			},
			tagValue: {
				type: [
					String,
					Number
				]
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tag {
		padding: 0.2rem 0.2rem 0.2rem 1rem;
		display: flex;
		align-items: center;
		border-radius: 2rem;
		background-color: $color-brand-3;

		&__name {
			margin-right: 0.5rem;
			color: $color-white;
			font-weight: 600;
		}

		&__value {
			padding: 0.2rem 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: $color-brand-3;
			font-weight: 600;
			border-radius: 2rem;
			background-color: $color-white;
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
