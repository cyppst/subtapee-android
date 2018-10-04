import {ifAuthenticated, ifNotAuthenticated} from './access'

export default [
  {
    path: '/login',
    component: () => import('components/auth/Login'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '/',
        component: () => import('pages/index'),
        meta: {
          title: 'ข่าวประชาสัมพันธ์'
        }
      },
      {
        path: '/announce/:id',
        component: () => import('pages/Announce'),
        props:true,
        meta: {
          title: 'งานติดตั้ง'
        }
      },
    ]
  },
  {
    path: '/task',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '/',
        component: () => import('pages/task'),
        meta: {
          title: 'งานติดตั้ง'
        }
      },
      {
        path: 'create',
        component: () => import('pages/task/create'),
        meta: {
          title: 'บันทึกข้อมูลงาน'
        },
      },
      {
        path: 'create_serial',
        component: () => import('pages/task/create_serial'),
        meta: {
          title: 'ข้อมูลอุปกรณ์'
        },
      }
    ]
  },
  {
    path: '/revoke',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '/',
        component: () => import('pages/revoke'),
        meta: {
          title: 'งานถอน'
        }
      },
      {
        path: 'create',
        component: () => import('pages/revoke/create'),
        meta: {
          title: 'บันทึกข้อมูลงาน'
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
        path: '/',
        component: () => import('pages/equipment/index'),
        meta: {
          title: 'อุปกรณ์'
        }
      }
    ]
  },
  {
    path: '/material',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '/',
        component: () => import('pages/material/index'),
        meta: {
          title: 'วัสดุ'
        }
      }
    ]
  },
  {
    // Always leave this as last one
    path: '*',
    component: () => import('components/auth/Login')
  }
]
