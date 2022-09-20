import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.prototype.$axios = axios



// 全局过滤器
Vue.filter('formDate', function (v) {
  return moment(v).format('YYYY, h:mm:ss');
})


// 自动获取焦点  <input v-focus />
Vue.directive('focus', {
  inserted(el, binding) {
    el.focus()
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
