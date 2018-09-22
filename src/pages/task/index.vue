<template>
  <q-page padding>
    <div v-if="tasks.length==0" class="row">
      <div class="absolute-center text-center">
        <img class="text-center" style="max-width: 60%;" src="~assets/tower.svg"/>
        <hr>
        <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>

      </div>
    </div>
    </div>
    <q-timeline responsive color="secondary">


      <q-timeline-entry v-for="(task, index) in tasks"
                        :key="task.id"
                        :subtitle="task.created_at"
                        :title="task.customer_name+' #'+task.circuit_id"
                        side="left">
        <q-chip small class="q-mr-xs" color="primary">
          {{getEquip(task.Equipment.brand,task.Equipment.model)}}
        </q-chip>
        <q-chip small class="q-mr-xs" color="secondary">
          S/N : {{task.serial.toUpperCase()}}
        </q-chip>
        <q-chip v-if="task.service_charge>0" small icon="attach_money" class="q-mr-xs" color="orange-8">
          {{task.service_charge}}
        </q-chip>
      </q-timeline-entry>


    </q-timeline>

    <!-- content -->
    <!--<q-list highlight>-->
    <!--<q-list-header>ทั้งหมด {{tasks.length}} รายการ</q-list-header>-->
    <!--<q-item>-->
    <!--<q-item-side avatar="assets/linux-avatar.svg"/>-->
    <!--<q-item-main label="Jack Doe"/>-->
    <!--<q-item-side right>-->
    <!--<q-btn :id="111" flat round dense icon="send"/>-->
    <!--</q-item-side>-->
    <!--</q-item>-->
    <!--<q-item>-->
    <!--<q-item-side avatar="assets/linux-avatar.svg"/>-->
    <!--<q-item-main label="Jack Doe"/>-->
    <!--</q-item>-->
    <!--</q-list>-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        color="primary"
        to="/task/create"
        icon="add"
      />
    </q-page-sticky>
    <inner-loading :loading="isLoading"/>
  </q-page>
</template>

<script>
  import {mapGetters, mapState, mapActions} from "vuex";
  import InnerLoading from "components/InnerLoading";

  export default {
    name: "Task",
    data() {
      return {};
    },
    components: {InnerLoading},
    mounted() {
      this.refresh();
    },
    computed: {
      ...mapState("task", ["tasks"]),
      ...mapGetters(["isLoading"])
    },
    methods: {
      ...mapActions("task", ["refresh"]),
      taskDetail: function (event) {
        console.log(event.target.id);
      },
      scanBarcode: function () {
        if (window.hasOwnProperty("cordova")) {
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              if (!result.cancelled) {
                this.$notify.create({
                  type: "positive",
                  message: result
                });
              }
            },
            function (error) {
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
      },
      getEquip: function (brand, model, serial) {
        return brand + " " + model;
      }
    }
  };
</script>

<style>
</style>
