// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/vue-material/dist/vue-material.css'
import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css'
import '../node_modules/font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex'
import storeOptions from './vuex/store'

import axios from 'axios'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false

export const http = axios.create({
  headers: {
    Authorization: null
  },
  transformRequest: [(data, headers) => {
    if (!headers['Authorization']) {
      delete headers['Authorization']
    }
    if (!headers['authorization']) {
      delete headers['authorization']
    }
    if (data && typeof data === 'object') {
      if (data.formData) {
        return Object.keys(data).map(key => {
          return {key: key, value: data[key]}
        }).reduce((formData, entry) => {
          const value = entry.value
          if (value !== undefined && value !== null) {
            switch (typeof value) {
              case 'object':
                formData.append(entry.key, JSON.stringify(value))
                break
              default:
                formData.append(entry.key, value)
                break
            }
          }
          return formData
        }, new FormData())
      } else {
        headers['Content-Type'] = 'application/json;charset=utf-8'
        return JSON.stringify(data)
      }
    } else if (data) {
      headers['Content-Type'] = 'text/plain;charset=utf-8'
      return String(data)
    } else {
      return data
    }
  }],
  transformResponse: [data => {
    try {
      return data ? JSON.parse(data) : data
    } catch (error) {
      return data
    }
  }]
})

Vue.use(Vuex)

export const store = new Vuex.Store(storeOptions)

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
