<template>
<div class="layout-view layout-padding">
      <q-field icon="account_circle">
        <q-input v-model="user.email" placeholder="Engineer Username" class="full-width" />
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="user.password" type="password" placeholder="Engineer password" class="full-width" />
      </q-field>
      <q-btn color="primary" class="full-width" @click="login()">เข้าสู่ระบบ</q-btn>
    </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      var data = {
        client_id: 2,
        client_secret: "iehwzcSJCCbX3L6YJf9coKeEcpebfRZpfpMehqtl",
        grant_type: "password",
        username: this.user.email,
        password: this.user.password
      };
      this.$axios.post("http://localhost/oauth/token", data).then(response => {
        //console.log(response);
        this.$auth.setToken(response.data.access_token);
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>
