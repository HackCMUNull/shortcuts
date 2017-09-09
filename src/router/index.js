import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import navbar from '../components/navbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/b',
      name: 'b',
      component: navbar
    }
  ]
})
