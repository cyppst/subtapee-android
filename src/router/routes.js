import {ifAuthenticated, ifNotAuthenticated} from './access'
import '../store'
export default [
  {
    name: 'login',
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
        name: 'index',
        path: '/',
        component: () => import('pages/index'),
        meta: {
          title: 'ข่าวประชาสัมพันธ์'
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
        name: 'task-create',
        path: 'create',
        component: () => import('pages/task/create'),
        meta: {
          title: 'บันทึกข้อมูลงาน',
          footerPanel: false
        }
      },
      {
        name: 'task-detail',
        path: 'detail/:id',
        component: () => import('pages/task/detail'),
        meta: {
          title: 'ข้อมูลวงจร',
          footerPanel: false
        }
      },
      {
        name: 'task-index',
        path: '',
        component: () => import('pages/task'),
        meta: {
          title: 'งานติดตั้ง',
          createLink: '/task/create'
        }
      },
      {
        name: 'task-create-serial',
        path: 'create/serial',
        component: () => import('pages/task/create_serial'),
        meta: {
          title: 'ระบุ Serial Number.',
          footerPanel: false
        },
      },
      {
        name: 'task-create-upload',
        path: 'create/upload/:id',
        component: () => import('pages/task/create_upload'),
        meta: {
          title: 'อัพโหลดไฟล์ภาพ',
          subtitle: 'เลือกไฟล์ภาพประกอบการทำงาน',
          footerPanel: false
        }
      },
    ]
  },
  {
    path: '/revoke',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        name: 'revoke-index',
        path: '/',
        component: () => import('pages/revoke'),
        meta: {
          title: 'งานถอน',
          createLink: '/revoke/create'
        }
      },
      {
        name: 'revoke-create',
        path: 'create',
        component: () => import('pages/revoke/create'),
        meta: {
          title: 'บันทึกข้อมูลงาน',
          footerPanel: false
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
        name: 'equipment-index',
        path: '',
        component: () => import('pages/equipment/index'),
        meta: {
          title: 'อุปกรณ์'
        }
      },
      {
        name: 'equipment-detail',
        path: 'detail/:id',
        component: () => import('pages/equipment/detail'),
        meta: {
          title: 'ข้อมูลอุปกรณ์',
          footerPanel: false
        }
      },
      {
        name: 'equipment-pending',
        path: 'pending/:id',
        component: () => import('pages/equipment/pending'),
        meta: {
          title: 'ข้อมูลอุปกรณ์',
          footerPanel: false

        }
      },
      {
        name: 'equipment-transfer',
        path: 'transfer/:id/',
        component: () => import('pages/equipment/transfer'),
        meta: {
          title: 'กก',
          footerPanel: false
        }
      },
    ]
  },
  {
    path: '/material',
    component: () => import('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        name: 'material-index',
        path: '/',
        component: () => import('pages/material/index'),
        meta: {
          title: 'วัสดุ'
        }
      },
    ]
  },
  {
    // Always leave this as last one
    path: '*',
    component: () => import('components/auth/Login')
  }
]
