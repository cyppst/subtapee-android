<template>
  <div id="q-app">
          <q-ajax-bar/>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    const token = window.localStorage['user-token'] || ''
    if (token) {
      this.$setAxiosHeader(token)
    }
  }
}
</script>

<style>
</style>
