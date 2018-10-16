<template>
  <q-pull-to-refresh pull-message="ดึงเพื่อโหลด" release-message="ปล่อย" refresh-message="กำลังโหลด"
                     :handler="refresher">

    <q-page>
      <div v-if="this.onhand+this.pending ==0" class="row">
        <div style="max-width: 40%;" class="absolute-center text-center">
          <img class="text-center" style="max-width: 60%;" src="assets/tower.svg"/>
          <hr>

          <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>
        </div>
      </div>
      <q-list highlight v-if="this.pending.length>0">
        <q-list-header>รอการตรวจสอบ {{pending.length}} รายการ</q-list-header>
        <q-item link @click.native="materialPending(row.id)" v-for="(row, index) in pending" :key="row.id"
                @native.click="materialPending(row.id)">
          <q-item-side :id="row.id" avatar="statics/school-material.png"/>
          <q-item-main :id="row.id" :label="row.name">
            <slot name="sublabel">
              <q-chip dense class="q-mr-xs" icon="today" color="secondary">
                {{row.created_at}}
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

        <q-list-header>ข้อมูลการเบิกวัสดุทั้งหมด {{onhand.length}} รายการ</q-list-header>
        <q-item v-for="(row, index) in onhand" :key="row.id">
          <q-item-side :id="row.id" avatar="statics/school-material.png"/>
          <q-item-main :id="row.id" :label="row.name">
            <slot name="sublabel">


              <q-chip square dense class="q-mr-xs" icon="alarm" color="dark">
                {{row.created_at}}
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
      <pendingMaterialDialog :pendingMaterialDialog="pendingMaterialDialog"></pendingMaterialDialog>
      <inner-loading :loading="isLoading"/>
    </q-page>
  </q-pull-to-refresh>
</template>
<script>
  import {mapGetters, mapState, mapActions} from "vuex";
  import pendingMaterialDialog from "components/pendingMaterialDialog";
  import InnerLoading from "components/InnerLoading";

  export default {
    name: "Material",
    data() {
      return {
        pendingMaterialDialog: {
          show: false,
          id: null
        }
      };
    },
    components: {InnerLoading, pendingMaterialDialog},
    mounted() {
      if (!this.material) {
        this.refresh();
      }
    },
    computed: {
      ...mapGetters(["isLoading"]),
      ...mapGetters("material", ["onhand", "pending"]), // assuming you are using namespaced modules
      hasPending: function () {
        return this.pending.length;
      }
    },
    methods: {
      ...mapActions("material", ["refresh", "response"]),
      materialPending: function (id) {
        this.pendingMaterialDialog.show = true;
        this.pendingMaterialDialog.id = id;
      },
      refresher: function (done) {
        this.refresh().then(() => done())
      }
    }
  };
</script>

<style>
</style>
