<template>
	<div id="app">
		<PageTitle :title="title" />
		<Board />
		<Message class="message--rounded-one-line">
			<p>
				This application uses the browser's Local Storage to store data
			</p>
		</Message>
	</div>
</template>


<script>
	import PageTitle from "@/components/Page/PageTitle.vue";
	import Board from "@/components/Board/Board.vue";
	import Message from "@/components/UI/Message.vue";


	export default {
		components: {
			PageTitle,
			Board,
			Message
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

		@media screen and (max-height: 450px) {
			height: inherit;
		}
	}

	body {
		padding: 5rem 3rem;
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
		overflow-x: hidden;

		&:after {
			content: "";
			width: 100%;
			height: 100%;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			background: linear-gradient(
				to bottom,
				$color-brand-1 0%,
				$color-brand-2 100%
			);
		}

		@media screen and (max-height: 450px) {
			height: inherit;
		}
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
