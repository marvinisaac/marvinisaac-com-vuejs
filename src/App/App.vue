<template>
    <div id="app">
        <navigation v-bind:navigation-links="this.navLinks"></navigation>
        <router-view class="section"></router-view>
        <custom-footer v-bind:footer-links="this.footerLinks"></custom-footer>
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
            navLinks: [
            ],
            footerLinks: [
                {
                    text: 'LinkedIn',
                    destination: 'https://linkedin.com/in/marvinisaac'
                }, {
                    text: 'Github',
                    destination: 'https://github.com/marvinisaac'
                }
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

<style lang="scss" scoped>
.section {
    min-height: 100vh;
}
</style>
