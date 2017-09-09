import Vue from 'vue'
import Router from 'vue-router'
import HistoryList from '../components/HistoryList.vue'
import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'
import Result from '../components/Result.vue'
import Navbar from '../components/Navbar.vue'
import Navbar2 from '../components/Navbar02.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/b',
      name: 'b',
      component: Navbar
    },
    {
      path: '/b2',
      name: 'b2',
      component: Navbar2
    },
    {
      path: '/a',
      name: 'a',
      component: HistoryList
    }
  ]
})
