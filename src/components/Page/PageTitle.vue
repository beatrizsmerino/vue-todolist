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


<style lang="scss">
	.page-title {
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		color: $color-white;
		margin-bottom: 2rem;
		text-align: center;
		font-size: 6.4rem;
		font-weight: normal;
	}
</style>
