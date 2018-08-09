import Engineer from '@layouts/Engineer.vue'
import Login from '@pages/Login.vue'
import Dashboard from '@pages/Dashboard.vue'

import Task from '@pages/task/index.vue'
import TaskCreate from '@pages/task/create.vue'
// OnHand
// import Equipment from '@pages/onHand/Equipment.vue'
// import Material from '@pages/onHand/Material.vue'

const routes = [{
    path: '/login',
    component: Login,
    meta: {
      requireAuth: false
    }
  }, {
    path: '/',
    component: Engineer,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requireAuth: true
      }
    }]
  },
  {
    path: '/task',
    component: Engineer,
    redirect: '/task/index',
    children: [{
        path: 'index',
        component: Task,
        meta: {
          requireAuth: true
        },
      },
      {
        path: 'create',
        component: TaskCreate,
        meta: {
          requireAuth: true
        },
      }
    ]

  }
]


// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () =>
      import ('pages/Error404.vue')
  })
}


export default routes
