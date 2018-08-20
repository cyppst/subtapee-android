<template>
  <q-page padding>
    <!-- content -->
    <q-list highlight>
      <q-list-header>รอการตรวจสอบ</q-list-header>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="assets/linux-avatar.png">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="John Doe"/>
        <q-item-side right>
          <router-link :to="{ name: 'transfer', params: { id: 1 } }">go</router-link>

          <q-item-tile icon="chat_bubble" color="green"/>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side avatar="assets/linux-avatar.png"/>
        <q-item-main label="Jim Doe"/>
        <q-item-side right icon="chat_bubble"/>
      </q-item>
      <q-item-separator/>
      <q-list-header>ที่ท่านทำลังถือ</q-list-header>
      <q-item>
        <q-item-side avatar="assets/linux-avatar.png"/>
        <q-item-main label="Jack Doe"/>
      </q-item>
    </q-list>
  </q-page>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Equipment',
    data () {
      return {}
    },
    components: {},
    mounted () {
      this.refresh()
    },
    computed: {
      tasks: {
        get () {
          return this.$store.state.equipment.equipments
        }
      }
    },
    methods: {
      ...mapActions('equipment', ['refresh','transfer','response']),
      transferEquipmentTo: function () {
        this.$axiosInstance
          .post('/equipment/verify', {body: serial})
          .then(response => {
            console.log(response.data)
            this.Equipment = response.data

          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style>
</style>
