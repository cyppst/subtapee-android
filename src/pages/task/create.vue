<template>
  <q-page padding>

</q-page>
</template>

<script>
import { Notify } from "quasar";

export default {
  name: "TaskCreate",
  mounted: function() {
    scanBarcode();
  },
  methods: {
    scanBarcode: function() {
      cordova.plugins.barcodeScanner.scan(
        function(result) {
          Notify.create({
            type: "positive",
            message: result
          });
        },
        function(error) {
          Notify.create({
            type: "negative",
            message: error
          });
        },
        {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "UPC_A,UPC_E,EAN_13,CODE_39,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      );
    }
  }
};
</script>

<style>
</style>
