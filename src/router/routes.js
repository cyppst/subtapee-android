import { ifAuthenticated, ifNotAuthenticated } from './access'

export default [
  {
    path: '/',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/index')
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
        component: () => import('pages/task')
      },
      {
        path: '/task/create',
        component: () => import('pages/task/create'),
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
        component: () => import('pages/equipment/index')
      },
      {
        path: '/task/pending',
        component: () => import('pages/equipment/pending'),
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
