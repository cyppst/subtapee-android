<template>
  <q-page class="flex flex-center">
    <q-card inline style="width:500px; padding:30px">
      <form v-on:submit.prevent="submit()">

        <q-list separator>

          <q-item>
            <q-item-main>

              <q-btn icon="camera_alt" v-if="this.$isCordova" @click="scanBarcode()"/>
              <q-field>
                <q-input ref="serial" stack-label="Serial" v-model="form.serial" @blur="this.verifySerial"
                         :disabled="isVerified"/>
              </q-field>
              <q-input stack-label="หมายเลขวงจร" v-model="form.circuit_id"/>
              <q-input stack-label="ชื่อลูกค้า" v-model="form.customer_name"/>
              <q-input stack-label="เก็บค่าแรกเข้า" v-model="form.service_charge"/>
              <q-input stack-label="หมายเหตุ" v-model="form.remarks"/>
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
  export default {
    data () {
      return {
        form: [],
        Equipment: []
      }
    },
    created: function () {
      this.$nextTick(function () {
      })
    },
    computed: {
      isVerified () {
        if (this.Equipment.length === 0) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      scanBarcode: function () {
        if (this.$isCordova) {
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              if (!result.cancelled) {
                this.submitSerial(result)
              }
            },
            function (error) {
              $q.notify.create({
                type: 'negative',
                message: error
              })
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
              orientation: 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations: true, // iOS
              disableSuccessBeep: false // iOS and Android
            }
          )
        } else {
          $q.notify.create({
            type: 'negative',
            message: 'Run again using Android.'
          })
        }
      },
      verifySerial: function () {
        let serial = this.form.serial
        if (!this.isVerified) {
          this.$axiosInstance
            .post('/equipment/verify', {body: serial})
            .then(response => {
              console.log(response.data)
              this.Equipment = response.data

            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      submit: function () {
        this.$store.dispatch('task/create_task', this.form).then(response => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
