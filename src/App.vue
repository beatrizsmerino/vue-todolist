<template>
	<page-title :title="title"></page-title>
</template>


<script>
	import PageTitle from "./components/ComponentTitle.vue";

	export default {
		components: {
			PageTitle
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

			li {
				display: flex;
				align-items: center;
				line-height: 1;
				user-select: none;

				&:not(:last-child) {
					padding-bottom: 15px;
				}

				&:hover {
					cursor: text;

					.task {
						&__remove {
							opacity: 1;
							cursor: pointer;
						}
					}
				}

				&.is-done {
					.task {
						&__title {
							color: #c3bbb6;

							&:before {
								width: 100%;
							}
						}
					}
				}
			}
		}
	}

	.task {
		&__title {
			position: relative;
			transition: all 0.2s ease-in-out;

			&:before {
				transition: all 0.2s ease-in-out;
				content: "";
				height: 1px;
				background: #c3bbb6;
				width: 0%;
				top: 50%;
				position: absolute;
				left: 0;
			}
		}

		&__checkBox {
			width: 20px;
			height: 20px;
			border: 2px solid #ddd4ce;
			border-radius: 50%;
			margin-right: 15px;
			position: relative;
			display: flex;
			opacity: 0.7;
			transition: all 0.2s ease-in-out;

			&:hover {
				cursor: pointer;
				opacity: 1;
			}

			&:before {
				transition: all 0.2s ease-in-out;
				content: "\f00c";
				font-family: "FontAwesome";
				margin: auto;
				font-size: 0.8em;
				color: #31ecb8;
				opacity: 0;
				transform: scale(0.5);
			}

			&.is-done {
				border-color: #31ecb8;
				opacity: 1;

				&:before {
					opacity: 1;
					transform: scale(1);
				}
			}
		}
		&__remove {
			margin-left: auto;
			padding-left: 15px;
			opacity: 0;
			color: #ff3c41;
			transition: all 0.2s ease-in-out;
			font-size: 1.2em;
		}
	}

	.task-new {
		background: rgba(0, 0, 0, 0.05);
		padding: 15px;
		display: flex;

		&__input {
			flex: 1;
			margin-right: 10px;
			padding: 5px 10px;
			border: none;
			outline: none;
			border-left: 5px solid #f65050;
			font-family: "Roboto", sans-serif;
		}

		&__button {
			outline: none;
			border: none;
			border-radius: 50%;
			font-size: 1.5em;
			color: white;
			background: #f65050;
			display: flex;
			width: 35px;
			height: 35px;
			transition: all 0.15s ease-in-out;

			&:hover {
				cursor: pointer;
				background: #ff5c60;
			}
		}

		&__icon{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
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
