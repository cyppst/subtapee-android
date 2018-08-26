<template>
  <div id="q-app">
    <q-ajax-bar/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },

    created () {
        const token = window.localStorage['TOKEN'] || '';
      if (token) {
        this.$setAxiosHeader(token)
      }
    }
  }
</script>

<style>
</style>
