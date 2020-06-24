<template>
    <div class="container">
        <a id="home" class="button is-light" href="/">
            <span class="has-text-weight-bold is-uppercase">
                Home
            </span>
        </a>
        <div class="article-container"
            v-for="(article, index) in articleList"
            :key="index">
            <img :src="getCdnLink(article.featured_image)" />
            <h1 class="title is-size-4">
                <!--
                    NOTE
                    Link should be title in kebab-case
                    Routes should be added dynamically
                    Routes should be saved/cached locally
                 -->
                <a :href="'/' + article.id">
                    {{article.title}}
                </a>
            </h1>
            <h6 class="subtitle is-size-7">{{article.publish_date}}</h6>
            <div class="content">
                <p v-html="article.body"></p>
            </div>
        </div>
    </div>
</template>

<script>
import DirectusSDK from '@directus/sdk-js'

export default {
    data: () => ({
        api: undefined,
        articleList: undefined,
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
        this.articleList = await this.getArticleList()
    },
    methods: {
        async getArticleList () {
            const options = {
                fields: [
                    'id',
                    'featured_image.filename_disk',
                    'title',
                    'publish_date'
                ],
                sort: '-publish_date'
            }
            return this.api.getItems('articles', options)
                .then((articles) => {
                    return articles.data
                })
        },
        getCdnLink (file) {
            if (file === null) {
                const imageDefault = 'marvinisaac-com/facebook-share.jpg'
                return `${this.cdnUrl}/${imageDefault}`
            }

            return `${this.cdnUrl}/directus/${this.project}/originals/${file.filename_disk}`
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    margin-bottom: auto;
    max-width: 640px;

    #home {
        position: absolute;
            top: 1em;
            left: 1em;
    }

    .article-container {
        .content {
            padding: 1.5rem;
            text-align: left;
        }
    }
}
</style>
