<template>
  <q-page padding>
            <div v-if="this.revokes.length==0" class="row">
            <div style="max-width: 60%;" class="absolute-center text-center">
              <img class="text-center" style="max-width: 60%;" src="~assets/tower.svg"/>
                <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>
            </div>
        </div>
    <q-timeline responsive color="secondary">
      <q-timeline-entry v-for="(revoke, index) in revokes"
                        :key="revoke.id"
                        :subtitle="revoke.created_at"
                        :title="revoke.customer_name+' #'+revoke.circuit_id"
                        side="left">
        <q-chip small class="q-mr-xs" color="primary">
          {{revoke.equipment}}
        </q-chip>
        <q-chip small class="q-mr-xs" color="secondary">
          S/N : {{revoke.serial.toUpperCase()}}
        </q-chip>
      </q-timeline-entry>
    </q-timeline>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        color="primary"
        to="/revoke/create"
        icon="add"
      />
    </q-page-sticky>
    <inner-loading :loading="isLoading"/>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import InnerLoading from "components/InnerLoading";

export default {
  name: "revoke",
  data() {
    return {};
  },
  components: { InnerLoading },
  mounted() {
    this.refresh();
  },
  computed: {
    ...mapState("revoke", ["revokes"]),
    ...mapGetters(["isLoading"])
  },
  methods: {
    ...mapActions("revoke", ["refresh"]),
    revokeDetail: function(event) {
      console.log(event.target.id);
    },
    scanBarcode: function() {
      if (window.hasOwnProperty("cordova")) {
        cordova.plugins.barcodeScanner.scan(
          function(result) {
            if (!result.cancelled) {
              this.$notify.create({
                type: "positive",
                message: result
              });
            }
          },
          function(error) {
            this.$notify.create({
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
        this.$notify.create({
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
