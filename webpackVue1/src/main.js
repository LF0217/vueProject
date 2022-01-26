import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import store from './store'
import App from './App'
import '../css/font-awesome.css'
import '../css/element-ui.css'
import '../css/element-extend.css'

Vue.use(Element)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

