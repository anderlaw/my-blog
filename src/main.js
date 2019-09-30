import Vue from 'vue'
import App from './App.vue'
import router from './route.js'
import store from './store/index.js'
import './markdown.scss'
import './main.scss'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
