<template>
  <div class="fixed fixed-center bg-grey-1 text-white">
    <form v-on:submit.prevent="submit()">
      <q-card square class="flex-center text-center" style="width: 400px; padding:50px">
        <span class="q-display-1 text-weight-regular text-dark"><strong>STP</strong> Login</span>
        <hr>
        <img src="~assets/tower.svg" style='max-width:200px; padding-top:30px; padding-bottom:50px'>
        <q-card-separator />
        <div class="text-left">
          <q-input id="username" type="text" v-model.trim="form.username" float-label="ชื่อผู้ใช้" required autofocus />
          <q-input id="password" type="password" v-model="form.password" float-label="รหัสผ่าน" required /><br>
        </div>
        <q-card-actions>
          <q-btn type="submit" class="fit" color="primary">เข้าสู่ระบบ</q-btn>
        </q-card-actions>
      </q-card>
    </form>
  </div>
</template>

<style>
</style>

<script>
  export default {
    data() {
      return {
        form: {
          username: "golfcomsci",
          password: "secret"
        }
      };
    },
    methods: {
      submit() {
        this.$store.dispatch("auth/login", this.form).then(response => {
          this.$router.push({ name: "index" });
        });
      }
    }
  };
</script>