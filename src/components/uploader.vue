<template>
  <q-uploader extensions=".jpg" multiple :url="url" :headers="headers" auto-expand/>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://stp.loc/api/task/upload',
        headers: {
          'authorization': 'Bearer ' + this.$store.state.auth.token
        },
        additionalFields: [
          {token: this.$store.state.auth.token}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
