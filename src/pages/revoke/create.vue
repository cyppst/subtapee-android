<template>
  <q-page padding class="row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <q-field
        :error="errors.has('circuit_no')"
        :error-label="errors.first('circuit_no')"
      >
        <q-input v-validate="'required'" data-vv-as="เลขวงจร" name="circuit_no" v-model="form.circuit_id" float-label="หมายเลขวงจร" />
      </q-field>
      <q-field>
        <q-input v-validate="'required'"  data-vv-as="ชื่อลูกค้า" v-model="form.customer_name" float-label="ชื่อลูกค้า" />
      </q-field>
      <q-input v-model="form.remarks" type="textarea" float-label="หมายเหตุ"/>
      <q-item-separator />
      <q-field>
      <div v-for="(index,eq) in eq">
        <q-input v-model="eq.serial" :float-label="inputLabel" />
      </div>
    </q-field>
    <q-btn dense class="full-width" color="primary" @click="addEq">
      เพิ่มอุปกรณ์
    </q-btn>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        color="primary"
        @click="formSubmit"
        icon="add"
      />
    </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
  import { mapActions} from 'vuex'

  export default {
    data () {
      return {
        form: {
          circuit_id: '',
          customer_name: '',
          service_charge: '',
          remarks: '',
        },
        eq: []

      }
    },
    computed:{
      inputLabel(){
        return "Serial No. #"
      }
    },
    methods:{
      ...mapActions('revoke', ['create_revoke','updateCurrentrevoke']),  // assuming you are using namespaced modules
      formSubmit: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.create_revoke(this.form)
              .then(response => {
                this.isLoading = false
                //
                this.$q.dialog({
                  title: 'ข้อมูลอุปกรณ์',
                  message: 'มีการติดตั้งอุปกรณ์หรือไม่?',
                  ok: 'มี',
                  cancel: 'ไม่มี'
                }).then((response) => {
                  this.updateCurrentrevoke(response)
                  this.$router.push('/revoke/create_serial')
                }).catch(() => {
                  this.isLoading = false
                })
                //
              })
              .catch(err => {
                this.isLoading = false
                this.$q.notify({
                  type: 'negative',
                  message: 'กรุณาตรวจสอบข้อมูล'
                })
              })
            return;
          }
        });
      },
      addEq: function () {
        this.eq.push({ serial: '' });
      }

    },
  }
</script>
