<template>
    <div class="container">
        <template v-if="messageSelected !== undefined">
            <div class="content">
                <h1 class="title is-size-5">Article Not Found</h1>
                <p>{{messageSelected.text}} Sorry!</p>
                <a class="imageLink" target="_blank"
                    :href="messageSelected.source">
                    <img :src="`${cdnUrl}/marvinisaac-com/${messageSelected.image}`" />
                </a>
                <div class="buttons is-centered">
                    <router-link class="button is-black" to="/article">
                        Go Back to Article List
                    </router-link>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: () => ({
        cdnUrl: process.env.VUE_APP_CDN_URL,
        messageList: [{
            analytics: 'Sooyoung Reading',
            image: 'sooyoung_reading.png',
            source: 'https://www.deviantart.com/yoonhaeseokyu17/art/Sooyoung-PNG-by-yoonhaeseokyu17-426149560',
            text: 'Sooyoung can\'t find that content anywhere.'
        }, {
            analytics: 'Sooyoung Dancing',
            image: 'sooyoung_kissing_you.webp',
            source: 'https://gfycat.com/remorsefuljitterykid',
            text: 'Here\'s a dancing Sooyoung because we can\'t find that page.'
        }, {
            analytics: 'Wendy Uh Oh',
            image: 'wendy_uh_oh.png',
            source: 'https://kpopping.com/profiles/artist/55-Wendy',
            text: 'Seems like Wendy can\'t find that page.'
        }, {
            analytics: 'Jeongyeon Bag',
            image: 'jeongyeon_bag.png',
            source: 'https://kpopping.com/profiles/artist/181-Jeongyeon',
            text: 'Jeongyeon took that page. Better try again.'
        }],
        messageSelected: undefined
    }),
    created () {
        let random = Math.floor(this.messageList.length * Math.random())
        this.messageSelected = this.messageList[random]
    }
}
</script>

<style lang="scss" scoped>
.container {
    .content {
        margin: 0 auto;
        max-width: 480px;
        padding: 0.5rem 1.5rem 0;

        .imageLink {
            display: block;

            img {
                display: inherit;
                margin: 0 auto;
                max-height: 40vh;
                width: auto;
            }
        }
    }
}
</style>
