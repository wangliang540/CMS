import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Component from './components/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')