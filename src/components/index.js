// 所有自定义组件的插件
import homeSide from './Home/home-side.vue'
import homeHeader from './Home/home-header.vue'
import breadCrumb from './Bread-crumb/index.vue'
export default {
    install(Vue) {
        Vue.component('home-side', homeSide),
            Vue.component('home-header', homeHeader),
            Vue.component('break-crumb', breadCrumb)
    }
}