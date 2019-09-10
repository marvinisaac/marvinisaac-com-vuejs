<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <div class="buttons are-small is-centered">
                <a class="button is-text"
                    v-for="(link, index) in this.links"
                    v-bind:key="index"
                    v-bind:href="link.destination">
                    {{ link.text }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Custom Footer',
    data () {
        return {
            links: [
                { text: 'LinkedIn', destination: 'https://linkedin.com/in/marvinisaac' },
                { text: 'Github', destination: 'https://github.com/marvinisaac' },
                { text: 'Blog', destination: '#' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: whitesmoke;
    padding: 3rem 1.5rem;
}
</style>
