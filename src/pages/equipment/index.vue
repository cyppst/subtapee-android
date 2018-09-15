<template>
    <q-page>
        <q-list highlight v-if="this.pending.length>0">
            <q-list-header>รอการตรวจสอบ {{pending.length}} รายการ</q-list-header>
            <q-item v-for="(row, index) in pending" :key="row.id" @native.click="equipmentPending(row.id)">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
                <q-item-main :id="row.id" :label="row.brand+' '+row.model">
                    <!--:sublabel="'S/N :'+row.serial.toUpperCase()">-->
                    <slot name="sublabel">
                        <q-chip dense class="q-mr-xs" color="primary">
                            S/N : {{row.serial.toUpperCase()}}
                        </q-chip>

                        <q-chip dense class="q-mr-xs" icon="today" color="secondary">
                            {{row.created_at}}
                        </q-chip>
                    </slot>
                </q-item-main>
                <q-item-side right>
                    <q-item-tile stamp>
                        <timeago :datetime="row.updated_at"></timeago>
                    </q-item-tile>
                    <q-btn :id="row.id" flat round dense icon="search" @click="equipmentPending(row.id)"/>
                </q-item-side>


            </q-item>
            <q-item-separator/>
        </q-list>
        <q-list highlight v-if="this.onhand.length>0">

            <q-list-header>ที่ท่านกำลังถือ {{onhand.length}} รายการ</q-list-header>
            <q-item v-for="(row, index) in onhand" :key="row.id">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
                <q-item-main :id="row.id" :label="row.brand+' '+row.model">
                    <!--:sublabel="'S/N :'+row.serial.toUpperCase()">-->
                    <slot name="sublabel">
                        <q-chip dense class="q-mr-xs" color="primary">
                            S/N : {{row.serial.toUpperCase()}}
                        </q-chip>

                        <q-chip dense class="q-mr-xs" icon="today" color="secondary">
                            {{row.created_at}}
                        </q-chip>
                    </slot>
                </q-item-main>
                <q-item-side right>
                    <q-item-tile stamp>
                        <timeago :datetime="row.updated_at"></timeago>
                    </q-item-tile>
                    <q-btn flat round dense icon="more_vert">
                        <q-popover>
                            <q-list link>
                                <q-item v-close-overlay>
                                    <q-item-main :id="row.id" @click.native="equipmentDetail(1)" label="ข้อมูล"/>
                                </q-item>
                                <q-item v-close-overlay>
                                    <q-item-main :id="row.id" label="เปลี่ยนผู้ถือ"
                                                 @click.native="equipmentTransfer(row.id)"/>
                                </q-item>
                            </q-list>
                        </q-popover>
                    </q-btn>
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
    import EquipDialog from 'components/EquipDialog'

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
            ...mapGetters('equipment', ['onhand', 'pending', 'EquipById']),  // assuming you are using namespaced modules
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
                this.pendingDialog.show = true;
                this.pendingDialog.id = id
            },
            equipmentDetail: function (id) {
                console.log(id)
                let data = this.EquipById(id)

                this.$q.dialog({
                    title: 'Alert',
                    message: 'S/N: ' + data.pivot.serial + '<br/>  Date: ' + data.pivot.created_at
                })
            }
        }
    }
</script>

<style>
</style>
