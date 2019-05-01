<template>
	<div id="app">
		<page-title :title="title"></page-title>
		<div class="todo-list">
			<task-new :tasks="tasks"></task-new>
		</div>
	</div>
</template>


<script>
	import PageTitle from "./components/ComponentTitle.vue";
	import TaskNew from "./components/ComponentTaskNew.vue";

	export default {
		components: {
			PageTitle,
			TaskNew
		},
		data() {
			return {
				title: "Things Todo"
			};
		}
	};
</script>


<style lang="scss">
	* {
		padding: 0;
		margin: 0;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		font-size: 15px;
		background: linear-gradient(to bottom, #9cedff 0%, #3e82c3 100%);
	}
	
	::placeholder {
		color: rgba(0, 0, 0, 0.3);
	}

	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}

	.todo-list {
		width: 80%;
		max-width: 500px;
		margin: 0 auto;
		box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.15);
		background: white;
		overflow: hidden;

		ul {
			list-style: none;
			padding: 25px;
		}
	}

	/* Vue List Item transition */

	.list-item-enter-active,
	.list-item-leave-active {
		transition: opacity 0.3s, transform 0.3s;
		transform-origin: left center;
	}

	.list-item-enter,
	.list-item-leave-to {
		opacity: 0;
		transform: scale(0.5);
	}

	.list-item-leave-active {
		position: absolute;
	}

	.list-item-move {
		transition: transform 0.4s linear 0.3;
	}
</style>
