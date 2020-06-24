import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../pages/Home.vue'
import ArticleList from './../pages/Article/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/article',
        component: ArticleList
    }, {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

export default router
