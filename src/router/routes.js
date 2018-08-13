import {
  ifAuthenticated,
  ifNotAuthenticated
} from './access'
export default [{
    path: '/',
    component: () =>
      import ('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [{
      path: '',
      component: () =>
        import ('pages/index')
    },]
  },
  {
    path: '/task',
    component: () =>
      import ('layouts/user'),
    beforeEnter: ifAuthenticated,
    children: [{
      path: '',
      component: () =>
        import ('pages/task')
    },]
  },

  { // Always leave this as last one
    path: '*',
    component: () =>
      import ('pages/404')
  },
  {
    path: '/login',
    component: () =>
      import ('components/auth/Login'),
    beforeEnter: ifNotAuthenticated
  }
]
