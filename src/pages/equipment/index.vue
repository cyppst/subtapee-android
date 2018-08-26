<template>
    <q-page padding>
        <q-list highlight v-if="this.pending.length>0">
            <q-list-header>รอการตรวจสอบ {{pending.length}} รายการ</q-list-header>
            <q-item v-for="(row, index) in pending" :key="row.id" @native.click="equipmentPending(row.id)">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
                <q-item-main :id="row.id" :label="row.brand+' รุ่น : '+row.model"/>

                <q-item-side right>
                    <q-btn :id="row.id" flat round dense icon="search" @click="equipmentPending(row.id)"/>
                </q-item-side>


            </q-item>
            <q-item-separator/>
        </q-list>
        <q-list>

            <q-list-header>ที่ท่านทำลังถือ</q-list-header>
            <q-item v-for="(row, index) in onhand" :key="row.id" @native.click="equipmentTransfer(row.id)">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
                <q-item-main :id="row.id" :label="row.brand+' รุ่น : '+row.model"/>

                <q-item-side right>
                    <q-btn :id="row.id" flat round dense icon="send" @click="equipmentTransfer(row.id)"/>
                </q-item-side>


            </q-item>
        </q-list>
        <transfer-dialog :transferDialog="transferDialog"></transfer-dialog>
        <pending-dialog :pendingDialog="pendingDialog"></pending-dialog>
        <inner-loading :loading="isLoading"/>
    </q-page>
</template>
<script>
    import {mapGetters, mapState, mapActions} from 'vuex'
    import transferDialog from 'components/transferDialog'
    import pendingDialog from 'components/pendingDialog'
    import InnerLoading from 'components/InnerLoading'


    export default {
        name: 'Equipment',
        data() {
            return {
                transferDialog: {
                    show: false,
                    id: null
                },
                pendingDialog: {
                    show: false,
                    id: null
                }
            }
        },
        components: {InnerLoading, transferDialog, pendingDialog},
        mounted() {
            this.refresh()
        },
        computed: {
            ...mapGetters(['isLoading']),
            ...mapState('equipment', ['onhand', 'pending']),  // assuming you are using namespaced modules
            hasPending: function () {
                return this.pending.length
            }
        },
        methods: {
            ...mapActions('equipment', ['refresh', 'transfer', 'response']),
            equipmentTransfer: function (id) {
                this.transferDialog.show = true;
                this.transferDialog.id = id
            },
            equipmentPending: function (id) {
                console.log(id);
                this.pendingDialog.show = true;
                this.pendingDialog.id = id
            }
        }
    }
</script>

<style>
</style>
