<template>
    <div class="container">
        <template v-if="article !== undefined">
            <img :src="article.image" />
            <div class="content">
                <h1 class="title is-size-5">
                    {{article.title}}
                </h1>
                <h6 class="subtitle is-size-7">
                    {{article.publish_date}}
                </h6>
                <div v-html="article.body"></div>
            </div>
        </template>
    </div>
</template>

<script>
import DirectusSDK from '@directus/sdk-js'

export default {
    metaInfo () {
        if (this.article !== undefined) {
            return {
                title: this.article.title
            }
        }
    },
    props: {
        articleId: Number
    },
    data: () => ({
        article: undefined,
        cdnUrl: process.env.VUE_APP_CDN_URL,
        cmsUrl: process.env.VUE_APP_CMS_URL,
        project: process.env.VUE_APP_CMS_PROJECT
    }),
    async created () {
        this.api = new DirectusSDK({
            url: this.cmsUrl,
            project: this.project,
            storage: window.localStorage
        })
        this.article = await this.getArticle()
    },
    methods: {
        async getArticle () {
            const options = {
                fields: [
                    'title',
                    'publish_date',
                    'body',
                    'featured_image.filename_disk'
                ],
                filter: {
                    id: this.articleId
                }

            }
            return this.api.getItems('articles', options)
                .then((article) => {
                    return article.data[0]
                })
                .then((article) => {
                    article.image = this._getCdnLink(article.featured_image)
                    return article
                })
        },
        _getCdnLink (file) {
            if (file === null) {
                const imageDefault = 'marvinisaac-com/facebook-share.jpg'
                return `${this.cdnUrl}/${imageDefault}`
            }

            return `${this.cdnUrl}/cms/${this.project}/originals/${file.filename_disk}`
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    img {
        display: block;
        margin: 0 auto;
        max-width: 480px;
        width: 100%;
    }

    .content {
        margin: 0 auto;
        max-width: 480px;
        padding: 0.5rem 1.5rem 0;
    }
}
</style>
