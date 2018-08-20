<template>

</template>

<script>
  export default {
    name: 'transfer',
    data () {
      return {
        form: [],
        Users: []
      }
    },
    methods: {

      ...mapActions('equipment', ['refresh','transfer','response']),
      transferEquipmentTo: function () {
        this.$store.commit('setLoading', false, {root: true})
        this.$axiosInstance
          .get('/equipment/target')
          .then(response => {
            this.$store.commit('setLoading', false, {root: true})
            this.target = response.data.target
          })
          .catch(err => {
            this.$store.commit('setLoading', false, {root: true})
            console.log(err)
          })
      }
    }

  }
</script>

<style scoped>

</style>
