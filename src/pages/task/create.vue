<template>
<<<<<<< HEAD
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
      <q-input v-validate="'required'" name="customer_name" data-vv-as="ชื่อลูกค้า" v-model="form.customer_name" float-label="ชื่อลูกค้า" />
=======
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-btn icon="camera_alt" v-if="this.$isCordova" @click="scanBarcode()"/>
      <q-field>
        <q-input ref="input_serial" stack-label="Serial"
                 :readonly="isScannerData"
                 v-model="form.serial"
                 @blur="$v.form.serial.$touch"
                 :error="$v.form.serial.$error"/>

>>>>>>> 0920a017fb4f0918294b628825b8c601bd383d1a
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
    data() {
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
<<<<<<< HEAD
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
=======
    components: {uploader},
    mounted: function () {
      this.scanBarcode()
    },
    created: function () {
      this.$nextTick(function () {
      })
    },
    computed: {
      isVerified() {
        if (this.Equipment.length === 0) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      ...mapActions('task', ['create_task']),  // assuming you are using namespaced modules
      scanBarcode: function () {
        var self = this

        if (this.$isCordova) {
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              if (!result.cancelled) {
                self.form.serial = result.text
                self.isScannerData = true
              } else {
                this.$nextTick(() => { // ES6 arrow function
                  this.$refs.input_serial.focus()
                })

              }
            },
            function (error) {
              alert('Scanning failed: ' + error)
            },
            {
              preferFrontCamera: false, // iOS and Android
              showFlipCameraButton: false, // iOS and Android
              showTorchButton: true, // iOS and Android
              torchOn: true, // Android, launch with the torch switched on (if available)
              saveHistory: true, // Android, save scan history (default false)
              prompt: 'Place a barcode inside the scan area', // Android
              resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats: 'UPC_A,UPC_E,EAN_13,CODE_39,CODE_128', // default: all but PDF_417 and RSS_EXPANDED
              orientation: 'portrait', // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations: true, // iOS
              disableSuccessBeep: false // iOS and Android
            }
          )
        } else {
          this.$notify.create({
            type: 'negative',
            message: 'Run again using Android.'
          })
        }
      },
      submit: function () {
        this.$v.form.$touch()

        if (this.$v.form.$error) {
          this.$q.notify('กรุณากรอกข้อมูลให้ครบทุกช่อง')

        } else {
          this.create_task(this.form)
            .then(response => {
              this.isLoading = false
              this.$q.notify({
                type: 'positive',
                message: response.data
>>>>>>> 0920a017fb4f0918294b628825b8c601bd383d1a
              })
            return;
          }
        });


      },

    },
  }
</script>
