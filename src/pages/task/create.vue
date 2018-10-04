<template>
  <q-page padding class="row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <q-field
        :error="errors.has('circuit_no')"
        :error-label="errors.first('circuit_no')"
      >
      <q-input v-validate="'required'" data-vv-as="เลขวงจร" name="circuit_no" v-model="form.circuit_id" float-label="หมายเลขวงจร" />
      </q-field>
      <q-field
        :error="errors.has('customer_name')"
        :error-label="errors.first('customer_name')"
      >
      <q-input v-validate="'required'"  data-vv-as="ชื่อลูกค้า" v-model="form.customer_name" float-label="ชื่อลูกค้า" />
      </q-field>

      <q-input v-model="form.service_fees"  data-vv-as="เก็บค่าติดตั้ง" float-label="เก็บค่าติดตั้ง" />
      <q-field
        :error="errors.has('service_fees')"
        :error-label="errors.first('service_fees')"
      >
      <q-input v-validate="'required'" v-model="form.dropwire_begin"  data-vv-as="ระยะเริ่ม" name="service_fees" type="number" float-label="ระยะสาย (เริ่ม)" />
      </q-field>
      <q-field
        :error="errors.has('dropwire_end')"
        :error-label="errors.first('dropwire_end')"
      >
      <q-input v-validate="'required'" v-model="form.dropwire_end" data-vv-as="ระยะสิ้นสุด"  name="dropwire_end" type="number" float-label="ระยะสาย (สิ้นสุด)" />
      </q-field>

      <q-input v-model="form.remarks" type="textarea" float-label="หมายเหตุ"/>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        color="primary"
        @click="formSubmit"
        icon="add"
      />
    </q-page-sticky>
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
        countEquip: 0
      }
    },
    methods:{
      ...mapActions('task', ['create_task','updateCurrentTask']),  // assuming you are using namespaced modules
      formSubmit: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.create_task(this.form)
              .then(response => {
                this.isLoading = false
                //
                this.$q.dialog({
                  title: 'ข้อมูลอุปกรณ์',
                  message: 'มีการติดตั้งอุปกรณ์หรือไม่?',
                  ok: 'มี',
                  cancel: 'ไม่มี'
                }).then((response) => {
                  this.updateCurrentTask(response)
                  this.$router.push('/task/create_serial')
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

    },
  }
</script>
