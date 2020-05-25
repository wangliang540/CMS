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
                path: '/user',
                name: 'user',
                component: () =>
                    import ('../components/Back/user.vue')
            },
            {
                path: '/role',
                name: 'role',
                component: () =>
                    import ('../components/Back/role.vue')
            },
            {
                path: '/limit',
                name: 'limit',
                component: () =>
                    import ('../components/Back/limit.vue')
            },
            {
                path: '/menu',
                name: 'menu',
                component: () =>
                    import ('../components/Back/menu.vue')
            },
            {
                path: '/user-query',
                name: 'user-query',
                component: () =>
                    import ('../components/Cargo/user-query.vue')
            },
            {
                path: '/name-check',
                name: 'name-check',
                component: () =>
                    import ('../components/Cargo/name-check.vue')
            },
            {
                path: '/car-check',
                name: 'car-check',
                component: () =>
                    import ('../components/Dirver/car-check.vue')
            },
            {
                path: '/dirver-check',
                name: 'dirver-check',
                component: () =>
                    import ('../components/Dirver/dirver-check.vue')
            },
            {
                path: '/dirver-query',
                name: 'dirver-query',
                component: () =>
                    import ('../components/Dirver/dirver-query.vue')
            },
            {
                path: '/invoice',
                name: 'invoice',
                component: () =>
                    import ('../components/Tms/invoice.vue')
            },
            {
                path: '/waybill-import',
                name: 'waybill-import',
                component: () =>
                    import ('../components/Tms/waybill-import.vue')
            },
            {
                path: '/waybill-query',
                name: 'waybill-query',
                component: () =>
                    import ('../components/Tms/waybill-query.vue')
            },
            {
                path: '/waybill-import1',
                name: 'waybill-import1',
                component: () =>
                    import ('../components/Waybill/waybill-import.vue')
            },
            {
                path: '/waybill-query1',
                name: 'waybill-query1',
                component: () =>
                    import ('../components/Waybill/waybill-query.vue')
            },
            {
                path: '/waybill-statistic1',
                name: 'waybill-statistic1',
                component: () =>
                    import ('../components/Waybill/waybill-statistic.vue')
            },
            {
                path: '/dispatch-bill',
                name: 'dispatch-bill',
                component: () =>
                    import ('../components/Dispatch-bill/dispatch-bill.vue')
            },
            {
                path: '/account-query',
                name: 'account-query',
                component: () =>
                    import ('../components/Account/account-query.vue')
            },
            {
                path: '/deposit-admin',
                name: 'deposit-admin',
                component: () =>
                    import ('../components/Account/deposit-admin.vue')
            },
            {
                path: '/income-query',
                name: 'income-query',
                component: () =>
                    import ('../components/Account/income-query.vue')
            },
            {
                path: '/money-admin',
                name: 'money-admin',
                component: () =>
                    import ('../components/Account/money-admin.vue')
            },
            {
                path: '/refund-query',
                name: 'refund-query',
                component: () =>
                    import ('../components/Account/refund-query.vue')
            },
            {
                path: '/homepage',
                name: 'homepage',
                component: () =>
                    import ('../components/Home/home-page.vue')
            },
            {
                path: '/',
                name: 'homepage',
                component: () =>
                    import ('../components/Home/home-page.vue')
            },

            {
                path: '/invoice-admin',
                name: 'invoice-admin',
                component: () =>
                    import ('../components/Invoice/invoice-admin.vue')
            },


        ]

    }
]

const router = new VueRouter({
    routes
})

export default router