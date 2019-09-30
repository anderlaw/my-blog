import Vue from 'vue'
import App from './App.vue'
import router from './route.js'
import './markdown.scss'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
