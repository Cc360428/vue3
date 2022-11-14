import {createRouter, createWebHistory} from "vue-router"
import About from "@/views/About.vue"
import NotFound from '@/views/not_found.vue'
import Login from '@/views/user/login.vue'
import Layout from '@/layout'


// 路由信息
let routes = [
    {path: "/:catchAll(.*)", component: NotFound},
    {
        path: "/",
        name: 'Home',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/Home.vue'),
            },
        ]
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

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router