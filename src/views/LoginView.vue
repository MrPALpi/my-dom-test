<template>
	<div class="login">
		<div class="login__label">Авторизация</div>
		<login-form class="login__form"></login-form>
	</div>
</template>

<script>
	import LoginForm from '@/components/LoginForm.vue';

	export default {
		components: {
			LoginForm,
		},
	};
</script>

<style lang="scss" scoped>
	.login {
		flex: 0 1 340px;
		background-color: $bg;
		padding: 20px;
		border-radius: 5px;

		&__label {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-top: -40px;
			font-size: 16px;
			font-weight: 500;
			min-height: 56px;
			border-radius: 5px;
			background-color: $accent-2;
			color: $alt-color;
		}

		&__form {
			margin-top: 32px;
		}
	}
</style>
