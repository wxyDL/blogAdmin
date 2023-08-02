import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homepage',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/homepage',
        name: '首页',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        }
      },
      {
        path: '/personal/center',
        name: '个人中心',
        component: () => import('@/views/personalCenter/index.vue'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
