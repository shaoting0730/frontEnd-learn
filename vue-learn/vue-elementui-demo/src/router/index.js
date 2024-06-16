import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Config from '@/components/Config'
import Application from '@/components/Application'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/config',
      component: Config
    },
    {
      path: '/application',
      component: Application
    }
  ]
})
