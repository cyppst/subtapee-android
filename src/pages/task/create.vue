<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-btn icon="camera_alt" v-if="this.$isCordova" @click="scanBarcode()"/>
      <q-field>
        <q-input ref="input_serial" stack-label="Serial"
                 :readonly="isScannerData"
                 v-model="form.serial"
                 @blur="$v.form.serial.$touch"
                 :error="$v.form.serial.$error"/>

      </q-field>
      <q-input
        stack-label="หมายเลขวงจร"
        v-model="form.circuit_id"
        @blur="$v.form.circuit_id.$touch"
        :error="$v.form.circuit_id.$error"

      />
      <q-input
        stack-label="ชื่อลูกค้า"
        v-model="form.customer_name"
        @blur="$v.form.customer_name.$touch"
        :error="$v.form.customer_name.$error"

      />
      <q-input
        stack-label="เก็บค่าแรกเข้า"
        v-model="form.service_charge"


      />
      <q-input stack-label="หมายเหตุ"
               v-model="form.remarks"/>

      <p class="caption">Accepting only .jpg</p>
      <uploader/>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          round
          size="lg"
          color="primary"
          @click="submit"
          icon="add"
        />
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  import {mapActions} from 'vuex'
  import uploader from 'components/uploader'

  export default {
    data() {
      return {
        isScannerData: false,
        form: {
          serial: '',
          circuit_id: '',
          customer_name: '',
          service_charge: '',
          remarks: ''
        },
        Equipment: []
      }
    },
    validations: {
      form: {
        serial: {required},
        circuit_id: {required},
        customer_name: {required}
      }
    },
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
              })
              this.$router.push('/')

            }).catch(err => {
            this.isLoading = false
            this.$q.notify({
              type: 'negative',
              message: err.response.data
            })
          })
        }

      }
    }
  }
</script>
