import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
<<<<<<< HEAD
import navbar from '../components/navbar.vue'
=======
import HistoryList from '../components/HistoryList.vue'
>>>>>>> 334c0e8673b1bfc96af59afba6ed7a506a0d5d68

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
<<<<<<< HEAD

    {
      path: '/b',
      name: 'b',
      component: navbar
=======
    {
      path: '/a',
      name: 'a',
      component: HistoryList
>>>>>>> 334c0e8673b1bfc96af59afba6ed7a506a0d5d68
    }
  ]
})
