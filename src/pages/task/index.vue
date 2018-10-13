<template>
  <q-page>
    <div v-if="this.tasks.length==0" class="row">
      <div class="absolute-center text-center">
        <img class="text-center" style="max-width: 60%;" src="~assets/tower.svg"/>
        <hr>
        <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>

      </div>
    </div>
    <q-list highlight v-if="this.tasks.length>0">

      <q-list-header>ประวัติการติดตั้ง {{this.tasks.length}} รายการ</q-list-header>
      <q-item  link :to="{name: 'detail', params: {id: row.id}}" v-for="(row, index) in tasks" :key="row.id"  @click.native="toggleDialog(row.id)">
        <q-item-side :id="row.id" avatar="statics/linux-avatar.svg"/>
        <q-item-main :id="row.id" :label="row.customer_name+' '+row.circuit_id">
          <!--:sublabel="'S/N :'+row.serial.toUpperCase()">-->
          <slot name="sublabel">
            <!--<q-chip dense class="q-mr-xs" color="primary">-->
              <!--S/N : {{row.serial.toUpperCase()}}-->
            <!--</q-chip>-->

            <q-chip dense class="q-mr-xs" icon="today" color="secondary">
              {{row.created_at}}
            </q-chip>
          </slot>
        </q-item-main>
        <!--<q-item-side right>-->
          <!--<q-item-tile stamp>-->
            <!--<timeago :datetime="row.created_at"></timeago>-->
          <!--</q-item-tile>-->
          <!--<q-btn flat round dense icon="more_vert">-->
            <!--<q-popover>-->
              <!--<q-list link>-->
                <!--<q-item v-close-overlay>-->
                  <!--<q-item-main :id="row.id" @click.native="toggleDialog(row.id)" label="ข้อมูล"/>-->
                <!--</q-item>-->
              <!--</q-list>-->
            <!--</q-popover>-->
          <!--</q-btn>-->
        <!--</q-item-side>-->


      </q-item>
    </q-list>
    <!--<TaskDialog :TaskDialog="TaskDialog"></TaskDialog>-->
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
  import  {mapGetters, mapState, mapActions} from 'vuex'
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
      this.refresh()
    },
    computed: {
      ...mapGetters(['isLoading']),
      ...mapGetters('task', ['tasks', 'TaskById']), // assuming you are using namespaced modules
    },
    methods: {
      ...mapActions('task', ['refresh', 'transfer', 'response']),
      toggleDialog: function (id) {
        this.TaskDialog.show = true
        this.TaskDialog.id = id
      },
    }
  }
</script>

<style>
</style>
