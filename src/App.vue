<template>
	<div class="app">
		<PageTitle :title="getPageTitle" />
		<Dashboard />
		<UIMessage>
			<p>This application uses the browser's Local Storage to store data.</p>
		</UIMessage>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import PageTitle from "@/components/Page/PageTitle.vue";
	import Dashboard from "@/components/Dashboard/Dashboard.vue";
	import UIMessage from "@/components/UI/UIMessage.vue";

	export default {
		"components": {
			PageTitle,
			Dashboard,
			UIMessage,
		},
		"computed": {
			...mapGetters([
				"getPageTitle",
			]),
		},
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// ===============================================================================

	// BASE
	// ----------------------------------------------------------------------
	@use "@/assets/scss/base/base-reset";
	@use "@/assets/scss/base/base-global";
	@use "@/assets/scss/base/base-fonts";
</style>
