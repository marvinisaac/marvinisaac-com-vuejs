<template>
    <div class="container">
        <div class="buttons">
            <router-link to="/" class="button is-small">
                <span class="has-text-weight-bold">
                    🏠
                </span>
            </router-link>
            <button class="button is-small is-thin is-white" disabled>
                <span>/</span>
            </button>
            <router-link to="/article" class="button is-small">
                <span class="has-text-weight-bold">
                    article
                </span>
            </router-link>
            <template v-if="title !== undefined && isTitleFound">
                <button class="button is-small is-thin is-white" disabled>
                    <span>/</span>
                </button>
                <router-link :to="`/article/${title}`" class="button is-small">
                    <span class="has-text-weight-bold">
                        {{title}}
                    </span>
                </router-link>
            </template>
        </div>

        <article-list v-if="title === undefined"
            :article-list="articleList">
        </article-list>

        <article-single v-if="isTitleFound()"
            :article-id="articleId">
        </article-single>
    </div>
</template>

<script>
import DirectusSDK from '@directus/sdk-js'
import slugify from 'slugify'
import ArticleList from './ArticleList.vue'
import ArticleSingle from './ArticleSingle.vue'

export default {
    components: {
        ArticleList,
        ArticleSingle
    },
    props: {
        title: String
    },
    data: () => ({
        api: undefined,
        articleList: undefined,
        cmsUrl: process.env.VUE_APP_CMS_URL,
        project: process.env.VUE_APP_CMS_PROJECT
    }),
    computed: {
        articleId: function () {
            return this.articleList[this.title]['id']
        }
    },
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
        isTitleFound () {
            return this.articleList !== undefined &&
                this.title !== undefined &&
                this.articleList[this.title] !== undefined
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
    text-align: initial;

    .buttons {
        margin-bottom: 0;
        padding: 0.5rem 1.5rem;

        .button.is-thin {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
</style>
