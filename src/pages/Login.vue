<template>
    <q-modal v-model="opened" >
      <div style="padding: 50px">
<q-field>
       <q-input v-model="user.username" stack-label="ชื่อผู้ใช้" placeholder="Add some text..."  />
       <q-input v-model="user.password" stack-label="รหัสผ่าน" placeholder="Add some text..."  />
   </q-field>
     <q-btn color="primary" class="full-width q-ma-lg" label="เข้าสู่ระบบ" @click="login" />

      </div>
    </q-modal>
</template>
<script>
import { Notify } from "quasar";
export default {
  data() {
    return {
      opened: true,
      user: {
        username: 'admin',
        password: 'secret'
      }
    };
  },
  methods: {
    login() {
      var data = {
        client_id: 4,
        client_secret: "BL3Bea2H6Fws0g4ulQZ2CIQwmXEnfOceOeOjUIFO",
        grant_type: "password",
        username: this.user.username,
        password: this.user.password
      };
      this.$axios
        .post("/oauth/token", data)
        .then(response => {
          this.$auth.setToken(
            response.data.access_token,
            response.data.expires_in + Date.now()
          );
          this.$router.push("/dashboard");
        })
        .catch(error => {
          Notify.create({
            type: "negative",
            message: error.message
          });
        });
    }
  }
};
</script>
<style>
</style>
