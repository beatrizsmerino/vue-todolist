<template>
	<h1 class="page-title">
		{{ title }}
	</h1>
</template>

<script>
	export default {
		"name": "PageTitle",
		"props": {
			"title": {
				"type": String,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-title {
		margin-bottom: 2rem;
		color: $color-white;
		font-family: $font-brand-1;
		font-size: 6.4rem;
		font-weight: 600;
		line-height: 100%;
		text-align: center;

		@include media("sm") {
			font-size: 12vw;
		}
	}
</style>
