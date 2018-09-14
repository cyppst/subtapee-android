<template>
    <q-page padding class="docs-input row justify-center">
        <div style="width: 500px; max-width: 90vw;">
            <q-btn icon="camera_alt" v-if="this.$isCordova" @click="scanBarcode()"/>
            <q-field>
                <q-input ref="serial" stack-label="Serial"
                         v-model="form.serial"
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
                    @blur="$v.form.service_charge.$touch"
                    :error="$v.form.service_charge.$error"


            />
            <q-input stack-label="หมายเหตุ"
                     v-model="form.remarks"/>
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

    export default {
        data() {
            return {
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
                customer_name: {required},
                service_charge: {required},
                remarks: {required},
            }
        },
        mounted: function() {
            this.scanBarcode();
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
            ...mapActions('revoke', ['create_revoke']),  // assuming you are using namespaced modules
            scanBarcode: function () {
                if (this.$isCordova) {
                    cordova.plugins.barcodeScanner.scan(
                        function (result) {
                            if (!result.cancelled) {
                                this.form.serial = result
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
                            this.Equipment = response.data

                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            },
            submit: function () {
                this.$v.form.$touch()

                if (this.$v.form.$error) {
                    this.$q.notify('Please review fields again.')

                } else {
                    this.create_revoke(this.form)
                        .then(response => {
                            this.isLoading = false;
                            this.$q.notify({
                                type: 'positive',
                                message: response.message
                            });
                            this.$router.push('/')

                        }).catch(err => {
                        this.isLoading = false;
                        this.$q.notify({
                            type: 'negative',
                            message: err
                        })
                    })
                }

            }
        }
    }
</script>
