<template>
	<div id="app">
		<PageTitle :title="getPageTitle" />
		<Dashboard />
		<Message class="message--local-storage message--rounded-one-line">
			<p>
				This application uses the browser's Local Storage to store data
			</p>
		</Message>
	</div>
</template>


<script>
	import { mapGetters } from 'vuex'
	import PageTitle from "@/components/Page/PageTitle.vue";
	import Dashboard from "@/components/Dashboard/Dashboard.vue";
	import Message from "@/components/UI/Message.vue";


	export default {
		components: {
			PageTitle,
			Dashboard,
			Message
		},
		computed: {
			...mapGetters(['getPageTitle'])
		}
	};
</script>


<style lang="scss">
	@import url("https://fonts.googleapis.com/css?family=Roboto");

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

		@media screen and (max-height: 500px) {
			height: inherit;
		}
	}

	body {
		padding: 5rem 3rem;
		height: 100%;
		min-height: 100vh;
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

		@media screen and (max-height: 500px) {
			height: inherit;
		}
	}

	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>
