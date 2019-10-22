import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Phone from '@/components/login/phone'
import Enterprise from '@/components/login/enterprise'
import Census from '@/components/Census'
import Manage from '@/components/Manage'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login/phone',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      redirect: '/login/phone',
      children: [
        {
          path: 'phone',
          name: 'phone',
          component: Phone
        },
        {
          path: 'enterprise',
          name: 'enterprise',
          component: Enterprise
        }
      ],
      linkActiveClass: 'active'
    },
    {
      path: '/census',
      name: 'census',
      component: Census 
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
    
  ]
})
