<template>
  <div>
    <q-toolbar>
      <img class="text-center" style="max-width: 2rem;" src="~assets/tower.svg"/>

      <!--<q-icon size="2rem" name="fas fa-broadcast-tower"/>-->
      <!--<q-icon size="2rem" name="fas fa-broadcast-tower"/>-->
      <q-toolbar-title>
        ทรัพย์ตาปี แอปพลิเคชัน รุ่น 1.0.0
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

      <div class="column items-center q-pa-sm" style="height: 150px">
        <div class="col">
          <p class="q-caption">This Application was developed by <strong><a
            href="https://www.chaiyapoj.site/me">Golfcomsci57</a></strong> for
            <a href="https://www.suptapee.com">Suptapee Telecom Co., Ltd.</a></p>
        </div>
      </div>
    </div>

    <inner-loading :loading="isLoading"/>
  </div>
</template>

<style lang="stylus">
  // "variables" is a Webpack alias injected by Quasar CLI
  @import '~variables'
  a
    color $tertiary
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
              // console.log(error.response.data);
              // alert(error.response.data);
              // console.log(error.response.status);
              // console.log(error.response.headers);

          //
          // let result = Object.entries(error).map(( [k, v] ) => ({ [k]: v }));
          // console.log(result);
          this.$store.commit("setLoading", false, {root: true})
              this.$q.notify({
                message: 'Username หรือ Password ผิดพลาด',
                timeout: 2000,
                type: 'negative'
              })
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js

              // console.log(error.request);
              // alert(error.request);
              this.$q.notify({
                message: error.request,
                timeout: 2000,
                type: 'negative'
              })
            } else {
              // Something happened in setting up the request that triggered an Error
          // console.log('Error', error.message);
          this.$q.notify({
            message: 'ไม่สามารถเข้าสู่ระบบได้',
            timeout: 2000,
            type: 'negative'
          })
            }
          }
        )
      }
    }
  }
</script>
