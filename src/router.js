import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginView from './views/LoginView.vue'
import LoadingHome from './views/LoadingHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loadinghome',
      name: 'loading',
      component: LoadingHome
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})
