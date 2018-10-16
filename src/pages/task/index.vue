<template>
  <q-pull-to-refresh pull-message="ดึงเพื่อโหลด" release-message="ปล่อย" refresh-message="กำลังโหลด"
                     :handler="refresher">
    <q-page>
      <div v-if="this.tasks.length==0" class="row">
        <div class="absolute-center text-center">
          <img class="text-center" style="max-width: 60%;" src="assets/tower.svg"/>
          <hr>
          <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>

        </div>
      </div>
      <q-list highlight v-if="this.tasks.length>0">

        <q-list-header>ประวัติการติดตั้ง {{this.tasks.length}} รายการ</q-list-header>
        <q-item link :to="{name: 'task-detail', params: {id: row.id}}" v-for="row in tasks" :key="row.id"
                @click.native="toggleDialog(row.id)">
          <q-item-side :id="row.id" avatar="statics/networking.png"/>
          <q-item-main :id="row.id" :label="row.customer_name">
            <!--:sublabel="'Serial No.'+row.serial.toUpperCase()">-->
            <slot name="sublabel">
              <!--<q-chip dense class="q-mr-xs" color="primary">-->
              <!--Serial No. {{row.serial.toUpperCase()}}-->
              <!--</q-chip>-->

              <q-chip v-if="row.remarks" dense tag square color="blue-9">{{row.remarks}}</q-chip>
            </slot>

          </q-item-main>
          <q-item-side right>
            <q-item-tile stamp color="secondary">
              <timeago :datetime="row.created_at"></timeago>
            </q-item-tile>
          </q-item-side>

        </q-item>
      </q-list>
      <!-- Expandable, fixed position on a QLayout -->

      <inner-loading :loading="isLoading"/>
    </q-page>

  </q-pull-to-refresh>
</template>
<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import TaskDialog from 'components/TaskDialog'
  import InnerLoading from 'components/InnerLoading'

  export default {
    name: 'Task',
    data() {
      return {
        TaskDialog: {
          show: false,
          id: null
        }
      }
    },
    components: {InnerLoading, TaskDialog},
    mounted() {
      if (!this.tasks.length) {
        this.refresh()
      }
    },
    computed: {
      ...mapGetters(['isLoading']),
      ...mapGetters('task', ['tasks', 'TaskById']), // assuming you are using namespaced modules
      circuit_detail: function () {
        return this.getTaskById(this.$route.params.id);
      }
    },
    methods: {
      ...mapActions('task', ['refresh', 'transfer', 'response']),
      toggleDialog: function (id) {
        this.TaskDialog.show = true
        this.TaskDialog.id = id
      },
      refresher: function (done) {
        this.refresh().then(() => done())
      }
    }
  }
</script>

<style>
</style>
