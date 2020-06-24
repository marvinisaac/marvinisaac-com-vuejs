import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../pages/Home.vue'
import Article from './../pages/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/article',
        component: Article
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
