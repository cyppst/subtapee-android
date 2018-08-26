import {ifAuthenticated, ifNotAuthenticated} from './access'

export default [
    {
        path: '/',
        component: () => import('layouts/user'),
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('pages/index'),
                meta: {
                    title: 'Feed'
                }
            }
        ]
    },
    {
        path: '/task',
        component: () => import('layouts/user'),
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: '',
                component: () => import('pages/task'),
                meta: {
                    title: 'ประวัติการทำงาน'
                }
            },
            {
                path: 'create',
                name: 'transfer',
                component: () => import('pages/task/create'),
                meta: {
                    title: 'Create Task'
                },
            }
        ]
    },
    {
        path: '/equipment',
        component: () => import('layouts/user'),
        beforeEnter: ifAuthenticated,
        children: [
            {
                path: '',
                component: () => import('pages/equipment/index'),
                meta: {
                    title: 'อุปกรณ์'
                }
            }
        ]
    },
    {
        // Always leave this as last one
        path: '*',
        component: () => import('pages/404')
    },
    {
        path: '/login',
        component: () => import('components/auth/Login'),
        beforeEnter: ifNotAuthenticated
    }
]
