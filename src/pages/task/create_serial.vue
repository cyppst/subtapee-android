<template>
  <q-page padding class="row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <q-input :value="serial"

               @change="val => { serial = val }" float-label="ระบุ Serial Number"
               :after="[{icon: 'camera_alt', handler () {scanBarcode()}}]"/>
      {{this.serial}}
    </div>
  </q-page>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import InnerLoading from "components/InnerLoading";

  export default {
    name: "create_serial",
    data() {
      return {
        serial: null
      }
    },
    watch: {
      // whenever question changes, this function will run
      serial: function () {
        this.submitForm()
      }
    },
    components: {InnerLoading},
    computed: {
      ...mapState("task", ["task_id"]),
    },
    methods: {
      scanBarcode: function () {
        var self = this;

        if (this.$isCordova) {
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              self.form.serial = result.text;
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
      submitForm: function () {
        this.$store.commit("setLoading", true, {root: true})
        this.$axiosInstance.post('/task/serial/', this.serial)
          .then(response => {
            this.$q.notify({
              type: 'positive',
              message: response.message
            });
            this.$store.commit("setLoading", false, {root: true})
            this.promptDialog()
          })
          .catch(error => {
            this.$store.commit("setLoading", false, {root: true})
            this.$q.notify({
              type: 'negative',
              message: error.response.data
            })
          })
      },
      promptDialog: function () {
        this.$q.dialog({
          title: 'ข้อมูลอุปกรณ์',
          message: 'มีการติดตั้งอุปกรณ์หรือไม่?',
          ok: 'มี',
          cancel: 'ไม่มี'
        }).then(() => {
          this.$router.push('/task/create_serial')
        }).catch(() => {
          this.$store.commit("setLoading", true, {root: true})
          this.$router.push('/task')``
        })
      }
    }
  }
</script>

<style scoped>

</style>
