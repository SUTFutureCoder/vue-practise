import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Muse from 'components/Muse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/muse',
      name: 'Muse',
      component: Muse
    }
  ]
})
