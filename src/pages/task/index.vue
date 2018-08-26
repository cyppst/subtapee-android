<template>
    <q-page padding>
        <q-timeline responsive color="secondary">
            <q-timeline-entry heading>
                ประวัติการทำงาน
            </q-timeline-entry>

            <q-timeline-entry v-for="(task, index) in tasks"
                              :key="task.id"
                              :title="task.Equipment.model"
                              :subtitle="task.created_at"
                              side="left">
                <div :id="task.id" @click="taskDetail">
                    Lorem ipsum dolor sit amet.
                </div>
            </q-timeline-entry>
        </q-timeline>

        <!-- content -->
        <!--<q-list highlight>-->
        <!--<q-list-header>ทั้งหมด {{tasks.length}} รายการ</q-list-header>-->
        <!--<q-item>-->
        <!--<q-item-side avatar="assets/linux-avatar.png"/>-->
        <!--<q-item-main label="Jack Doe"/>-->
        <!--<q-item-side right>-->
        <!--<q-btn :id="111" flat round dense icon="send"/>-->
        <!--</q-item-side>-->
        <!--</q-item>-->
        <!--<q-item>-->
        <!--<q-item-side avatar="assets/linux-avatar.png"/>-->
        <!--<q-item-main label="Jack Doe"/>-->
        <!--</q-item>-->
        <!--</q-list>-->
        <inner-loading :loading="isLoading"/>
    </q-page>
</template>

<script>
    import {mapGetters, mapState, mapActions} from 'vuex'
    import InnerLoading from 'components/InnerLoading'

    export default {
        name: 'Task',
        data() {
            return {}
        },
        components: {InnerLoading},
        mounted() {
            this.refresh()
        },
        computed: {
            ...mapState('task', ['tasks']),
            ...mapGetters(['isLoading'])
        },
        methods: {
            ...mapActions('task', ['refresh']),
            taskDetail: function (event) {
                console.log(event.target.id)
            },
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
