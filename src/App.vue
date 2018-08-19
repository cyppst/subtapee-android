<template>
  <div id="q-app">
    <q-ajax-bar/>
    <router-view/>
    <inner-loading :loading="isLoading"/>
  </div>
</template>

<script>
  import InnerLoading from 'components/InnerLoading'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'App',
    components: {
      InnerLoading
    },
    computed: {
      ...mapGetters(['isLoading'])
    },
    created () {
      const token = window.localStorage['TOKEN'] || ''
      if (token) {
        this.$setAxiosHeader(token)
      }
    }
  }
</script>

<style>
</style>
