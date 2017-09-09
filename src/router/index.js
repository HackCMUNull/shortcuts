import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HistoryList from '../components/HistoryList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/a',
      name: 'a',
      component: HistoryList
    }
  ]
})
