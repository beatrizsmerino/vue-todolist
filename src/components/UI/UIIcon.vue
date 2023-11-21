<template>
	<i
		class="icon"
		:class="iconId"
	>
		<svg class="icon__svg">
			<use
				class="icon__use"
				:xlink:href="`#${iconId}`"
			/>
		</svg>
	</i>
</template>

<script>
	import { iconMap } from "@/assets/images/icons/icons-list.js";

	export default {
		"name": "UIIcon",
		"props": {
			"name": {
				"type": String,
				"required": true,
				"validate": name => Object.keys(iconMap).includes(name),
			},
		},
		"computed": {
			iconId() {
				return iconMap[this.name];
			},
		},
	};
</script>

<style lang="scss" scoped>
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;

		&__svg {
			display: inline-block;
			width: 100%;
			height: 100%;
		}
	}
</style>
