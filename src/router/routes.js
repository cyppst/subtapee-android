import Layout from '@layouts/Layout.vue'
import Login from '@pages/Login.vue'
import Dashboard from '@pages/Dashboard.vue'
// OnHand
import Equipment from '@pages/onHand/Equipment.vue'
import Material from '@pages/onHand/Material.vue'

const routes = [{
    path: '/',
    component: Layout,
    children: [{
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    }]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/onhand',
    name: 'Onhand',
    meta: {
      requireAuth: false
    },
    children: [{
        path: '/equipment',
        name: 'Equipment',
        component: Equipment,
      },
      {
        path: '/material',
        name: 'Material',
        component: Material,
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
