<template>
	<h1 class="title">
		{{title}}
	</h1>
</template>


<script>
	export default {
		props: ['title']
	};
</script>


<style lang="scss">
	.title {
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		color: $color-white;
		margin-bottom: 20px;
		text-align: center;
		font-size: 4rem;
		font-weight: normal;
	}
</style>
