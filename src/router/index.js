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
                path: '/home',
                component: () => import('@/views/home/index'),
            },
            {
                path: '/books',
                component: () => import('@/views/books/index'),
            },
            {
                path: '/users',
                component: () => import('@/views/user/index'),
            },

            {
                path: '/operations',
                component: () => import('@/views/operation/index'),
            },

            {
                path: '/settings',
                component: () => import('@/views/settings/index'),
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