<template>
    <nav class="navbar is-light is-fixed-top">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="/assets/images/marvinisaac_black.png" />
                </router-link>
                <a class="navbar-burger burger"
                    v-bind:class="{'is-active': showMobileNavbar}"
                    v-on:click="toggleMobileNavbar()">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div class="navbar-menu"
                v-bind:class="{'is-active': showMobileNavbar}">
                <div class="navbar-start">
                    <router-link class="navbar-item"
                        v-for="(link, index) in this.navigationLinks"
                        v-bind:key="index"
                        v-bind:to="link.destination"
                        v-on:click.native="hideMobileNavbar()">
                        {{ link.text }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        navigationLinks: Array
    },
    data () {
        return {
            showMobileNavbar: false
        }
    },
    methods: {
        toggleMobileNavbar () {
            this.showMobileNavbar = !this.showMobileNavbar
        },
        hideMobileNavbar () {
            this.showMobileNavbar = false
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    .container {
        .navbar-start {
            .router-link-exact-active {
                font-weight: bolder;
            }
        }
        .navbar-menu.is-active {
            position: absolute;
            width: 100%;
        }
    }
}
</style>
