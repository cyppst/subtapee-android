export default () => {
  router.beforeEach((to, from, next) => {
    if (!auth.loggedIn() && to.meta.requireAuth) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  })
}
