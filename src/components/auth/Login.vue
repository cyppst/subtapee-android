<template>
  <div>
    <q-toolbar>
      <q-icon size="2rem" name="fas fa-broadcast-tower"/>
      <!--<q-icon size="2rem" name="fas fa-broadcast-tower"/>-->
      <q-toolbar-title>
        Subtapee App
        <span slot="subtitle">ป้อน Username และ Password ที่ได้รับจากบริษัท</span>
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-view layout-padding">
      <q-field icon="account_circle">
        <q-input v-model="form.username" placeholder="Your username" class="full-width"/>
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="form.password" type="password" placeholder="Your password" class="full-width"/>
      </q-field>
      <q-btn color="primary" class="full-width" @click="submit()">เข้าสู่ระบบ</q-btn>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import {GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput} from 'quasar'

  export default {
    components: {QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput},

    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.$store.dispatch('auth/login', this.form).then(response => {
          this.$router.push('/')
        })
          .catch(err => {
            this.$q.notify(err)
          })
      }
    }
  }
</script>
