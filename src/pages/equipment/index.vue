<template>
  <q-pull-to-refresh pull-message="ดึงเพื่อโหลด" release-message="ปล่อย" refresh-message="กำลังโหลด"
                     :handler="refresher">
    <q-page>
      <div v-if="this.onhand+this.pending ==0" class="row">
        <div class="absolute-center text-center">
          <img class="text-center" style="max-width: 60%;" src="~assets/tower.svg"/>
          <hr>
          <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>

        </div>
      </div>
      <q-list highlight v-if="this.pending.length>0">
        <q-list-header>รอการตรวจสอบ {{pending.length}} รายการ</q-list-header>
        <q-item v-for="(row, index) in pending" :key="row.id" link
                :to="{name: 'equipment-pending', params: {id: row.id}}">
          <q-item-side :id="row.id" avatar="statics/wifi.png"/>
          <q-item-main :id="row.id" :label="getEquip(row.Equipment.brand,row.Equipment.model)">
            <slot name="sublabel">
              <q-chip square dense class="q-mr-xs" color="dark">
                Serial No. {{row.serial.toUpperCase()}}
              </q-chip>
            </slot>
          </q-item-main>
          <q-item-side right>
            <q-item-tile stamp>
              <timeago :datetime="row.updated_at"></timeago>
            </q-item-tile>
          </q-item-side>


        </q-item>
        <q-item-separator/>
      </q-list>
      <q-list highlight v-if="this.onhand.length>0">

        <q-list-header>ที่ท่านกำลังถือ {{onhand.length}} รายการ</q-list-header>
        <q-item v-for="(row, index) in onhand" :key="row.id" link
                :to="{name: 'equipment-detail', params: {id: row.id}}">
          <q-item-side :id="row.id" avatar="statics/wifi.png"/>
          <q-item-main :id="row.id" :label="row.Equipment.brand+' '+row.Equipment.brand">
            <!--:sublabel="'Serial No.'+row.serial.toUpperCase()">-->
            <slot name="sublabel">
              <q-chip square dense class="q-mr-xs" color="dark">
                Serial No. {{row.serial.toUpperCase()}}
              </q-chip>
            </slot>
          </q-item-main>
          <q-item-side right>
            <q-item-tile stamp>
              <timeago :datetime="row.updated_at"></timeago>
            </q-item-tile>
          </q-item-side>


        </q-item>
      </q-list>
      <transfer-dialog :transferDialog="transferDialog"></transfer-dialog>
      <pending-dialog :pendingDialog="pendingDialog"></pending-dialog>
      <inner-loading :loading="isLoading"/>
    </q-page>
  </q-pull-to-refresh>

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
      if (!this.equipment) {
        this.refresh();
      }
    },
    computed: {
      ...mapGetters(['isLoading']),
      ...mapGetters('equipment', ['onhand', 'pending', 'EquipById']), // assuming you are using namespaced modules
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
      getEquip: function (brand, model, serial) {
        return brand + ' ' + model
      },
      refresher: function (done) {
        this.refresh().then(() => done())
      }
    }
  }
</script>

<style>
</style>
