<script>
	import { defineAsyncComponent } from 'vue';
	import { layouts } from './index.js';

	export default {
		data() {
			return {
				layout: defineAsyncComponent(layouts.DEFAULT.component),
			};
		},
		watch: {
			$route(to, from) {
				const nextLayout = to?.meta?.layout || layouts.DEFAULT.component;
				const prevLayout = from?.meta?.layout;

				if (!nextLayout?.name || nextLayout?.name === prevLayout?.name) {
					return;
				}

				this.layout = defineAsyncComponent(nextLayout.component);
			},
		},
	};
</script>

<template>
	<keep-alive>
		<component :is="layout">
			<slot />
		</component>
	</keep-alive>
</template>
