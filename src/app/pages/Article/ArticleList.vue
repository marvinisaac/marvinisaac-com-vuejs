<template>
    <div class="container">
        <ul>
            <li
                v-for="(article, index) in articleList"
                :key="index">
                <a :href="'/article/' + index">
                    {{article.titleOriginal}}
                </a>
            </li>
        </ul>
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
    text-align: initial;
}
</style>
