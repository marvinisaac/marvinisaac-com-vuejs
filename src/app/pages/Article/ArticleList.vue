<template>
    <div class="container">
        <div class="content">
            <ul>
                <li
                    v-for="(article, index) in articleList"
                    :key="index">
                    <router-link :to="`/article/${index}`">
                        {{article.titleOriginal}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articleList: Object
    }
}
</script>

<style lang="scss" scoped>
.container {
    .content {
        padding: 0 1.5rem;

        ul {
            list-style: none;
            margin-left: 0;
        }
    }
}
</style>
