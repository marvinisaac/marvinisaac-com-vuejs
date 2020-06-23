<template>
    <div class="hero is-fullheight">
        <div class="hero-body">
            <home></home>
        </div>
    </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
    components: {
        Home
    }
}
</script>

<style lang="scss" scoped>
.hero {
    margin: 0 auto;
    max-width: 480px;
}
</style>
