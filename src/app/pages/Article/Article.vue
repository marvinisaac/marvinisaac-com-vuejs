<template>
    <div class="container">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="buttons">
                    <a class="button is-small" href="/">
                        <span class="has-text-weight-bold">
                            🏠
                        </span>
                    </a>
                    <button class="button is-small is-thin is-white" disabled>
                        <span>
                            /
                        </span>
                    </button>
                    <a class="button is-small" href="/article">
                        <span class="has-text-weight-bold">
                            article
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="contents">
            <article-list v-if="title === undefined"
                :article-list="articleList">
            </article-list>
        </div>
    </div>
</template>

<script>
import DirectusSDK from '@directus/sdk-js'
import slugify from 'slugify'
import ArticleList from './ArticleList.vue'

export default {
    components: {
        ArticleList
    },
    props: {
        title: String
    },
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
                    'title'
                ],
                sort: '-publish_date'
            }
            return this.api.getItems('articles', options)
                .then((articles) => {
                    return this._buildTitleMap(articles.data)
                })
        },
        _buildTitleMap (articles) {
            let slugOptions = {
                lower: true,
                strict: true
            }
            let titleMap = {}

            articles.forEach(article => {
                let title = slugify(article.title, slugOptions)
                titleMap[title] = {
                    id: article.id,
                    titleOriginal: article.title
                }
            })

            return titleMap
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    margin-bottom: auto;
    max-width: 960px;

    .level {
        padding: 0.5rem 1.5rem;

        .buttons {
            .button.is-thin {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }

    .contents {
        padding: 0 1.5rem;
    }
}
</style>
