<template>
	<h1 class="page-title">
		{{ title }}
	</h1>
</template>

<script>
	export default {
		name: 'PageTitle',
		props: {
			title: {
				type: String,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page-title {
		font-family: $font-brand-1;
		color: $color-white;
		margin-bottom: 2rem;
		text-align: center;
		line-height: 100%;
		font-size: 6.4rem;
		font-weight: 600;
	}
</style>
