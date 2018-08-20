<template>
  <q-page padding>
    <!-- content -->
    <q-list highlight>
      <q-item>
        <q-item-side avatar="assets/linux-avatar.png"/>
        <q-item-main label="Jack Doe"/>
      </q-item>
      <q-item>
        <q-item-side avatar="assets/linux-avatar.png"/>
        <q-item-main label="Jack Doe"/>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  data () {
    return {}
  },
  components: {},
  mounted () {
    this.refresh()
  },
  computed: {
    tasks: {
      get () {
        return this.$store.state.task.tasks
      }
    }
  },
  methods: {
    ...mapActions('task', ['refresh']),
    scanBarcode: function () {
      if (window.hasOwnProperty('cordova')) {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            if (!result.cancelled) {
              this.$notify.create({
                type: 'positive',
                message: result
              })
            }
          },
          function (error) {
            this.$notify.create({
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
        this.$notify.create({
          type: 'negative',
          message: 'Run again using Android.'
        })
      }
    }
  }
}
</script>

<style>
</style>
