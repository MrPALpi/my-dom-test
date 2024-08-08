<template>
	<div class="login-page">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	.login-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-image: url(../static/bg.webp);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
