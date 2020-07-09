<template>
    <div class="hero is-fullheight">
        <div class="hero-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s | Marvin Isaac'
    }
}
</script>

<style lang="scss" scoped>
.hero-body {
    padding: 0;
}
</style>
