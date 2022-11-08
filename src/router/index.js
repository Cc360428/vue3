import { createRouter, createWebHistory } from "vue-router"

// 引入
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import NotFound from '@/views/not_found.vue'
import Login from '@/views/user/login.vue'

// 路由信息
let routes = [
  { path: "/:catchAll(.*)", component: NotFound },
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/about",
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

// 路由器
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes,
})

export default router