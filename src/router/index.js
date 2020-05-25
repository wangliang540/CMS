import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/home'),
        children: [{
                path: 'user',
                name: 'user',
                component: () =>
                    import ('../components/Back/user.vue')
            },
            {
                path: 'role',
                name: 'role',
                component: () =>
                    import ('../components/Back/role.vue')
            },
            {
                path: 'limit',
                name: 'limit',
                component: () =>
                    import ('../components/Back/limit.vue')
            },
            {
                path: 'menu',
                name: 'menu',
                component: () =>
                    import ('../components/Back/menu.vue')
            },
        ]

    }
]

const router = new VueRouter({
    routes
})

export default router