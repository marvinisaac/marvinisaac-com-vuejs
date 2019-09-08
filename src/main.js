import Vue from 'vue'
import App from './App/App.vue'
import router from './App/AppRouter'
import './Styles/global.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
