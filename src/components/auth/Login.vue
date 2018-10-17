<template>
  <div>
    <q-toolbar>

      <q-icon size="2rem" name="fas fa-broadcast-tower"/>
      <!--<q-icon size="2rem" name="fas fa-broadcast-tower"/>-->
      <q-toolbar-title>
        suptapee App
        <span slot="subtitle">ป้อน Username และ Password ที่ได้รับจากบริษัท</span>
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-view layout-padding">
      <q-field icon="account_circle">
        <q-input v-model="form.username" placeholder="ชื่อผู้ใช้" class="full-width"/>
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="form.password" type="password" placeholder="รหัสผ่าน" class="full-width"/>
      </q-field>
      <q-field>
        <q-btn color="primary" class="full-width" @click="submit()">เข้าสู่ระบบ</q-btn>

      </q-field>
    </div>
    <inner-loading :loading="isLoading"/>
  </div>
</template>

<style>
</style>

<script>
  import {GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput} from 'quasar'
  import {mapGetters, mapMutations} from 'vuex'
  import InnerLoading from "components/InnerLoading";

  export default {
    components: {InnerLoading, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput},

    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters(["isLoading"]),

    },
    methods: {
      submit() {
        this.$store.commit("setLoading", true, {root: true})
        this.$store.dispatch('auth/login', this.form).then(response => {
          this.$router.push('/')
        }).catch(error => {
            // Error
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              alert(error.response.data);
              // console.log(error.response.status);
              // console.log(error.response.headers);
              this.$store.commit("setLoading", facebookOauth2Data, {root: true})
              this.$q.notify({
                message: 'User หรือ Password ไม่ถูกต้อง',
                timeout: 2000,
                type: 'negative'
              })
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js

              console.log(error.request);
              alert(error.request);
              this.$q.notify({
                message: 'ไม่สามารถเชื่อมต่อไปยัง Server ได้',
                timeout: 2000,
                type: 'negative'
              })
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          }
        )
      }
    }
  }
</script>
