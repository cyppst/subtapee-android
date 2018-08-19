<template>
  <q-page class="flex flex-center">
    <q-card inline style="width:500px; padding:30px">
      <q-list separator>
        <q-item>
          <q-item-main>
            <q-btn icon="camera_alt" v-if="this.$isCordova" @click="scanBarcode()"/>
            <q-field :helper="">
              <q-input stack-label="Serial" v-model="form.serial" @blur="verifySerial" />
            </q-field>
            <q-chip v-if="Equipment.length > 0" square class="shadow-1 q-ma-sm" icon="perm_device_information"
                    color="primary">
              q-chip
            </q-chip>

            <q-input stack-label="Equipment" v-model="Equipment"/>
            <q-input stack-label="Circuit ID" v-model="form.circuit_id"/>
            <q-input stack-label="Customer Name" v-model="form.customer_name"/>
            <q-input stack-label="Service Charge" v-model="form.service_charge"/>
            <q-input stack-label="Remarks" v-model="form.remarks"/>
          </q-item-main>
        </q-item>
      </q-list>
      <q-card-actions class="float-right">
        <q-btn icon="edit" no-caps color="primary" label="Save" @click='save()'/>
      </q-card-actions>
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
    this.$nextTick(function () {})
  },
  computed: {
    // fetchedData: function () {
    //   return this.Equipment.brand + ' ' + this.Equipment.model
    // }
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
    },
    verifySerial: function () {
      let serial = this.form.serial
      this.$axiosInstance
        .post('/task/create', { body: serial })
        .then(response => {
          console.log(response.data)
          this.Equipment = response.Equipment
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
