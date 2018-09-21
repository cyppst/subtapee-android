<template>
  <div id="q-app">
    <q-ajax-bar/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},

    created () {
      const token = window.localStorage['token'] || ''
      if (token) {
        this.$setAxiosHeader(token)
        this.$axiosInstance.interceptors.response.use(undefined, function (err) {
          return new Promise(function (resolve, reject) {
            if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
              this.$store.dispatch('auth/logout')
              this.$router.push('/login')
            }
            throw err
          })
        })
      }
    }
  }
</script>

<style>
</style>
