<template>
	<div class="default-page">
		<slot />
	</div>
</template>

<script>
	export default {
		mounted() {
			console.log('mounted');
		},
		beforeUnmount() {
			console.log('unmounted');
		},
	};
</script>

<style scoped></style>
