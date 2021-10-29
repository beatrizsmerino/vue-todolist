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
	import {mapGetters} from 'vuex';
	import PageTitle from '@/components/Page/PageTitle.vue';
	import Dashboard from '@/components/Dashboard/Dashboard.vue';
	import Message from '@/components/UI/Message.vue';

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
	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>
