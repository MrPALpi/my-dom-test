<template>
	<form v-bind="$attrs" @submit.prevent="submit">
		<slot></slot>
	</form>
</template>

<script>
	export default {
		methods: {
			submit(e) {
				const formData = new FormData(e.target);
				const objectData = Object.fromEntries(formData);
				console.log(e.target);
				this.$emit('submit', objectData);
			},
		},
	};
</script>
