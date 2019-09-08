<template>
	<div id="app">
		<navigation v-bind:navigation-links="this.links"></navigation>
		<router-view class="section"></router-view>
	</div>
</template>

<script>
import Navigation from './AppNavigation.vue'

export default {
	name: 'App',
	components: {
		Navigation
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