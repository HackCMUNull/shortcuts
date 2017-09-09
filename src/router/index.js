import Vue from 'vue'
import Router from 'vue-router'
import HistoryList from '../components/HistoryList.vue'
import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'
import Result from '../components/Result.vue'
import Swiper from '../components/Swiper.vue'

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
      path: '/a',
      name: 'a',
      component: HistoryList
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: Swiper
    }
  ]
})
