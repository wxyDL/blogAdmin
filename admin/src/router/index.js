import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
      },
      {
        path: '/article/create',
        name: '创建文章',
        component: () => import('@/views/articleManage/articleCreate/index.vue'),
        meta: {
          title: '创建文章'
        }
      },
      {
        path: '/article/data',
        name: '文章列表',
        component: () => import('@/views/articleManage/articleData/index.vue'),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: '/article/classification',
        name: '文章分类',
        component: () => import('@/views/classificationManage/articleClassification/index.vue'),
        meta: {
          title: '文章分类'
        }
      },
      {
        path: '/comment/manage',
        name: '评论留言',
        component: () => import('@/views/comment/index.vue'),
        meta: {
          title: '评论留言'
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
