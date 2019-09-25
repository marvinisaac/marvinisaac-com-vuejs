<template>
    <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="columns is-vcentered">
                            <div class="column">
                                <h1 class="title">Omo!</h1>
                                <p>{{ images[selected].text }}</p>
                                <p>Sorry!</p>
                                <a href="/">
                                    <span class="has-text-grey is-size-7">Go back to homepage</span>
                                </a>
                            </div>
                            <div class="column">
                                <a target="_blank"
                                    v-bind:href="images[selected].source">
                                    <figure>
                                        <img
                                            v-bind:src="images[selected].image">
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            images: [
                {
                    analytics: 'Sooyoung Reading',
                    image: '/images/sooyoung_reading.png',
                    source: 'https://www.deviantart.com/yoonhaeseokyu17/art/Sooyoung-PNG-by-yoonhaeseokyu17-426149560',
                    text: 'Sooyoung can\'t find that content anywhere.'
                },
                {
                    analytics: 'Sooyoung Dancing',
                    image: '/images/sooyoung_kissing_you.webp',
                    source: 'https://gfycat.com/remorsefuljitterykid',
                    text: 'Here\'s a dancing Sooyoung because we can\'t find that page.'
                },
                {
                    analytics: 'Wendy Uh Oh',
                    image: '/images/wendy_uh_oh.png',
                    source: 'https://kpopping.com/profiles/artist/55-Wendy',
                    text: 'Seems like Wendy can\'t find that page.'
                },
                {
                    analytics: 'Jeongyeon Bag',
                    image: '/images/jeongyeon_bag.png',
                    source: 'https://kpopping.com/profiles/artist/181-Jeongyeon',
                    text: 'Jeongyeon took that page. Better try again.'
                }
            ],
            selected: 0
        }
    },
    created () {
        this.selected = Math.floor(this.images.length * Math.random())
        this.$ga.event(
            'Omo',
            'Selected',
            this.images[this.selected].analytics,
            1
        )
    }
}
</script>
