<template>
	<div id="app">
		<navigation v-bind:navigation-links="this.links"></navigation>
		<router-view class="section"></router-view>
        <custom-footer></custom-footer>
	</div>
</template>

<script>
import Navigation from './AppNavigation.vue'
import CustomFooter from './AppFooter.vue'

export default {
	name: 'App',
	components: {
        Navigation,
        CustomFooter
	},
	data () {
		return {
			links: [
				{ text: 'Who', destination: '/who' },
				{ text: 'What', destination: '/what' },
				{ text: 'Why', destination: '/why' }
			]
		}
	},
	watch: {
		$route (to, from) {
			let title = 'Marvin'
			if (to.meta.title !== undefined || to.meta.title !== '') {
				title += ' | ' + to.meta.title
			}
			document.title = title
		}
	}
}
</script>