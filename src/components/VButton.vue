<template>
	<button class="button" v-bind="$attrs">
		<slot />
	</button>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.button {
		background-color: $accent;
		padding: 8px 16px;
		color: $alt-color;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s ease;

		@include hover {
			&:hover {
				background-color: $accent-2;
			}
		}
	}
</style>
