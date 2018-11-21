<template>
  <q-page padding class="row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <q-field
        :error="errors.has('circuit_no')"
        :error-label="errors.first('circuit_no')"
      >
        <q-input v-validate="'required'" data-vv-as="เลขวงจร" name="circuit_no" v-model="form.circuit_id"
                 float-label="หมายเลขวงจร"/>
      </q-field>
      <q-field>
        <q-input v-validate="'required'" data-vv-as="ชื่อลูกค้า" v-model="form.customer_name" float-label="ชื่อลูกค้า"/>
      </q-field>
      <q-input v-model="form.remarks" type="textarea" float-label="หมายเหตุ"/>
      <q-field>
        <div v-for="e in form.eq">
          <q-input v-model="e.equipment" float-label="อุปกรณ์"/>
          <q-input v-model="e.serial" float-label="Serial No."
                   :after="[{icon: 'camera_alt', handler () {scanBarcode()}}]"/>
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
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        form: {
          circuit_id: '',
          customer_name: '',
          service_charge: '',
          remarks: '',
          eq: []
        },

      }
    },
    computed: {
      inputLabel() {
        return "Serial No. #"
      }
    },
    methods: {
      ...mapActions('revoke', ['create_revoke', 'updateCurrentrevoke']),  // assuming you are using namespaced modules
    scanBarcode: function () {
      var self = this;

      if (this.$isCordova) {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            self.e.serial = result.text;
            self.isScannerData = true
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

      formSubmit: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.commit("setLoading", true, {root: true})

            this.create_revoke(this.form)
              .then(response => {
                this.$q.notify({
                  type: 'negative',
                  message: response.data.message
                });
                this.$router.push('/revoke/create')
              })
              .catch(err => {
                this.$q.notify({
                  type: 'negative',
                  message: 'กรุณาตรวจสอบข้อมูล'
                })
              });

          }
        });
      },
      addEq: function () {
        this.form.eq.push({serial: ''});
      }

    },
  }
</script>
