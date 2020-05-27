// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './css/reset.css'
import './css/fa/css/all.min.css'
import './css/index.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  store,
  router
})
