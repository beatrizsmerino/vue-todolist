<template>
	<transition-group name="list-item" tag="ul">
		<li v-for="(task, index) in tasks" :key="index" v-bind:class="{'done': task.status}" class="task">
			<div @click="task.status = !task.status" class="task__checkbox done">-</div>
			<span class="task__title">{{task.title}}</span>
			<div @click="taskRemove(index)" class="task__remove fa fa-trash-o">x</div>
		</li>
	</transition-group>
</template>


<script>
	export default {
		props: ["tasks"],
		methods: {
			taskRemove(index) {
				this.tasks.splice(index, 1);
			}
		}
	};
</script>


<style lang="scss">
	.task {
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

		&.done {
			.task {
				&__title {
					color: #c3bbb6;

					&:before {
						width: 100%;
					}
				}
			}
		}
			
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
			cursor:pointer;

			&:hover {
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

			&.done {
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
</style>
