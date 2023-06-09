import Vue from 'vue'
import VueRouter from 'vue-router'
import {dataScreenRouter} from "@/router/dataScreen"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    name: "首页",
    component: () => import("@/components/layout.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/dataScreen",
    name: "数据大屏",
    component: () => import("@/components/layout.vue"),
    children: dataScreenRouter
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
