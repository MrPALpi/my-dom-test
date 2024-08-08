<template>
	<v-form class="login-form" @submit="submit">
		<v-input name="login" type="text" required="true" maxlength="11">
			<template #before>
				<mdicon name="phone" />
			</template>
		</v-input>
		<v-input
			name="password"
			:type="showPassword ? 'text' : 'password'"
			minlength="4"
			maxlenght="10"
			placeholder="Пароль"
		>
			<template #before><mdicon name="lock" /></template>
			<template #after>
				<span @click="showPassword = !showPassword">
					<mdicon :name="showPassword ? 'eye' : 'eye-off'" />
				</span>
			</template>
		</v-input>
		<div class="login-form__center">
			<v-button class="login-form__btn">Войти</v-button>
		</div>
	</v-form>
</template>

<script>
	import VForm from '@/components/VForm.vue';
	import VInput from '@/components/VInput.vue';
	import VButton from '@/components/VButton.vue';

	export default {
		components: {
			VForm,
			VButton,
			VInput,
		},
		data() {
			return {
				showPassword: false,
			};
		},
		methods: {
			submit(formData) {
				console.log(formData);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.login-form {
		&__center {
			display: flex;
			justify-content: center;
		}

		&__btn {
			margin: 28px auto 0;
		}
	}
</style>
