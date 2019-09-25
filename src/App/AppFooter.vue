<template>
    <footer class="footer">
        <div class="container content is-clearfix">
            <div class="buttons are-small is-pulled-right">
                <a class="button is-text"
                    v-for="(link, index) in this.footerLinks"
                    v-bind:key="index"
                    v-bind:href="link.destination"
                    @click="logClick(link.text)">
                    {{ link.text }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CustomFooter',
    props: {
        footerLinks: Array
    },
    methods: {
        logClick (link) {
            this.$ga.event('Footer', 'Click', link, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: whitesmoke;
    padding: 1.5rem 1.5rem;
}
</style>
