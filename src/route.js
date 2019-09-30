
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from '@/pages/index.vue'
import Detail from '@/pages/detail.vue'

export default new VueRouter({
    routes:[
        { path: '/', component: Index },
        { path: '/detail', component: Detail }
    ]
})