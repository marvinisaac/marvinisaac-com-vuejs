import Vue from 'vue'
import App from './app/App.vue'
import './app/AppStyle.scss'
import router from './app/components/Router'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
