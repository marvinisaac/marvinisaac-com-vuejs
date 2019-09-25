import Vue from 'vue'
import App from './App/App.vue'
import router from './App/AppRouter'
import './Styles/global.scss'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
    id: 'UA-148466451-1',
    router,
    autoTracking: {
        skipSamePath: true
    },
    debug: {
        enabled: window.location.origin === 'http://localhost',
        sendHitTask: window.location.hostname === 'marvinisaac.com'
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
