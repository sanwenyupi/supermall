import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 安装ElemntUI
Vue.use(ElementUI)
// 安装toast插件
Vue.use(toast)

// 结局移动端300ms延迟
FastClick.attach(document.body)

// 懒加载
Vue.use(VueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
