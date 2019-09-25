import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(
                /* webpackChunkName: "home" */
                './Pages/Home.vue'
            ),
            meta: {
                title: 'Home'
            }
        }, {
            path: '/who',
            name: 'who',
            component: () => import(
                /* webpackChunkName: "who" */
                './Pages/Who.vue'
            ),
            meta: {
                title: 'Who'
            }
        }, {
            path: '/what',
            name: 'what',
            component: () => import(
                /* webpackChunkName: "what" */
                './Pages/What.vue'
            ),
            meta: {
                title: 'What'
            }
        }, {
            path: '/why',
            name: 'why',
            component: () => import(
                /* webpackChunkName: "why" */
                './Pages/Why.vue'
            ),
            meta: {
                title: 'Why'
            }
        }, {
            path: '/omo',
            name: 'omo',
            component: () => import(
                /* webpackChunkName: "omo" */
                './Pages/Omo.vue'
            ),
            meta: {
                title: 'Omo!'
            }
        }, {
            path: '*',
            redirect: '/omo'
        }
    ]
})
