<template>
	<div id="app">
		<PageTitle :title="title" />
		<Board />
	</div>
</template>


<script>
	import PageTitle from "./components/Page/PageTitle.vue";
	import Board from "./components/Board/Board.vue";


	export default {
		components: {
			PageTitle,
			Board
		},
		data() {
			return {
				title: "Things Todo"
			};
		}
	};
</script>


<style lang="scss">
	// @import url("https://fonts.googleapis.com/css?family=Kristi|Roboto");

	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		width: 100%;
		height: 100%;
		font-size: 10px;
	}

	body {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
		background: linear-gradient(
			to bottom,
			$color-brand-1 0%,
			$color-brand-2 100%
		);
	}

	::placeholder {
		color: rgba($color-black, 0.3);
	}

	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>
