import Vue from 'vue'
import Router from 'vue-router'
import HistoryList from '../components/HistoryList.vue'
import Landing from '../components/Landing.vue'
import Home from '../components/Home.vue'
import Result from '../components/Result.vue'
import Swiper from '../components/Swiper.vue'
import NavbarBack from '../components/NavbarBack.vue'
import Navbar from '../components/Navbar.vue'
import FloorRender from '../floor/FloorRender.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/home',
    //   children: [
    //     {
    //       path: '/result',
    //       name: 'result',
    //       component: Result
    //     }
    //   ]
    // },
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
      component: NavbarBack
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryList
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: Swiper
    },
    {
      path: '/floor',
      name: 'floor',
      component: FloorRender
    }
  ]
})
