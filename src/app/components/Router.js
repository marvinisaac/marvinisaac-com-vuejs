import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../pages/Home.vue'
import Blog from './../pages/Blog.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/blog',
        component: Blog
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
