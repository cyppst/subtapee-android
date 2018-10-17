<template>
  <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
  </q-modal>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        opened: false
      }
    },
    created() {
      console.log(this.$route.params.id)

    },
    mounted: function () {
      this.$axiosInstance.get('/announce', {id: this.$route.params.id})

        .then(response => {
          console.log(response);
          response.data = this.data;
        }).catch(err => {
        throw err
      })
    }
  }
</script>
