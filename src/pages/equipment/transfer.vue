<template>
  <q-page class="flex flex-center">
    <q-card inline style="width:500px; padding:30px">
      <form v-on:submit.prevent="submit()">

        <q-list separator>

          <q-item>
            <q-item-main>


              <q-input stack-label="ปลายทาง" v-model="form.user_id"/>
            </q-item-main>
          </q-item>
        </q-list>
        <q-card-actions class="float-right">
          <q-btn type="submit" no-caps color="primary" label="บันทึกข้อมูล"/>
        </q-card-actions>
      </form>
    </q-card>
  </q-page>
</template>

<script>

  function parseUsers (countries) {
    return users.map(user=> {
      let name = user.firstname+' '+lastname.default[0]
      return {
        id: 0,
        label: name,
        value: user.id
      }
    })
  }

  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        q: '',
        form: [],
        target: []
      }
    },
    created() {
      this.id = this.$route.params.id;
      console.log(this.id);
    },
    methods: {
      ...mapActions('equipment', ['fetchTarget']),
        search (terms, done) {
          // make an AJAX call
          // then call done(Array results)

          // DO NOT forget to call done! When no results or an error occurred,
          // just call with empty array as param. Example: done([])
            this.$axiosInstance
              .post('/equipment/f', {body: terms})
              .then(response => {
                done(parseUsers(response.data))
              })
        }
      },
    submit: function () {
      this.$store.dispatch('equipment/transfer', this.form).then(response => {
        this.$router.push('/')
      })
    }
  }
</script>
