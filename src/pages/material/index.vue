<template>
    <q-page>
        <div v-if="this.pending.length==0" class="row">
            <div style="max-width: 40%;" class="absolute-center text-center">
                <img src="~assets/404-error.svg">
                                <hr>

                <span class="text-center q-display-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>No</strong> Data</span>

            </div>
        </div>
        <q-list highlight v-if="this.pending.length>0">
            <q-list-header>รอการตรวจสอบ {{pending.length}} รายการ</q-list-header>
            <q-item v-for="(row, index) in pending" :key="row.id" @native.click="materialPending(row.id)">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
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
                    <q-btn :id="row.id" flat round dense icon="search" @click="materialPending(row.id)"/>
                </q-item-side>


            </q-item>
            <q-item-separator/>
        </q-list>
        <q-list highlight v-if="this.onhand.length>0">

            <q-list-header>ที่ท่านกำลังถือ {{onhand.length}} รายการ</q-list-header>
            <q-item v-for="(row, index) in onhand" :key="row.id">
                <q-item-side :id="row.id" avatar="assets/linux-avatar.png"/>
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
        </q-list>
        <pendingMaterialDialog :pendingMaterialDialog="pendingMaterialDialog"></pendingMaterialDialog>
        <inner-loading :loading="isLoading"/>
    </q-page>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
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
  components: { InnerLoading, pendingMaterialDialog },
  mounted() {
    this.refresh();
  },
  computed: {
    ...mapGetters(["isLoading"]),
    ...mapGetters("material", ["onhand", "pending"]), // assuming you are using namespaced modules
    hasPending: function() {
      return this.pending.length;
    }
  },
  methods: {
    ...mapActions("material", ["refresh", "response"]),
    materialPending: function(id) {
      this.pendingMaterialDialog.show = true;
      this.pendingMaterialDialog.id = id;
    }
  }
};
</script>

<style>
</style>
