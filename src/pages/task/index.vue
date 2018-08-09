<template>
  <q-page padding>
    <!-- content -->
    
<q-timeline responsive color="secondary">


  <q-timeline-entry
    title="Event Title"
    subtitle="February 22, 1986"
    side="left"
  >
    <div>
      Lorem ipsum dolor sit amet.
    </div>
  </q-timeline-entry>
  <q-timeline-entry
    title="Event Title"
    subtitle="February 22, 1986"
    side="left"
  >
    <div>
      Lorem ipsum dolor sit amet.
    </div>
  </q-timeline-entry>
  <q-timeline-entry
    title="Event Title"
    subtitle="February 22, 1986"
    side="left"
  >
    <div>
      Lorem ipsum dolor sit amet.
    </div>
  </q-timeline-entry>
  <q-timeline-entry
    title="Event Title"
    subtitle="February 22, 1986"
    side="left"
  >
    <div>
      Lorem ipsum dolor sit amet.
    </div>
  </q-timeline-entry>
  
</q-timeline>

     <q-page-sticky expand position="top-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="scanBarcode" icon="add" />
  </q-page-sticky>
  </q-page>
</template>

<script>
import { Notify } from "quasar";

export default {
  name: "Task",
  methods: {
    toggleNoti: function() {
      Notify.create({
        type: "positive",
        message: "aa"
      });
    },
    scanBarcode: function() {
      if (window.hasOwnProperty("cordova")) {
        cordova.plugins.barcodeScanner.scan(
          function(result) {
            if (!result.cancelled) {
              Notify.create({
                type: "positive",
                message: result
              });
            }
          },
          function(error) {
            Notify.create({
              type: "negative",
              message: error
            });
          },
          {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
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
      } else {
        Notify.create({
          type: "negative",
          message: "Run again using Android."
        });
      }
    }
  }
};
</script>

<style>
</style>
