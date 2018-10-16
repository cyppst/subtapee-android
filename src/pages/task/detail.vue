<template>
  <q-page>
    <div style="width: 100vw ;">
      <q-list>
        <q-list-header>รายละเอียด</q-list-header>
        <q-item>
          <q-item-main>
            <q-item-tile label>เลขวงจร</q-item-tile>
            <q-item-tile sublabel>{{task['circuit_id']}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>ชื่อลูกค้า</q-item-tile>
            <q-item-tile sublabel>{{task['customer_name']}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-if="task['service_fees']">
          <q-item-main>
            <q-item-tile label>เก็บค่าบริการ</q-item-tile>
            <q-item-tile sublabel>{{task['service_fees']}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>ระยะสาย</q-item-tile>
            <q-item-tile sublabel>{{task['dropwire_begin']}} - {{task['dropwire_end']}} ({{dropWireLength}})
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-if="task['remarks']">
          <q-item-main>
            <q-item-tile label>หมายเหตุ</q-item-tile>
            <q-item-tile sublabel>{{task['remarks']}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-if="task['created_at']">
          <q-item-main>
            <q-item-tile label>บันทึกเมื่อ</q-item-tile>
            <q-item-tile sublabel>{{task['created_at']}}
              (
              <timeago :datetime="task['created_at']"></timeago>
              )
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item-separator/>
        <div v-if="task['equipments'].length">
          <q-list-header>อุปกรณ์</q-list-header>
          <q-item v-for="(eq,index) in task['equipments']" :key="eq.id">
            <q-item-main>
              <q-item-tile label>{{eq.equipment.brand}} {{eq.equipment.model}} ({{eq.equipment.category.name}})
              </q-item-tile>
              <q-item-tile sublabel>
                <!--<q-chip square dense class="q-mr-xs" color="dark">-->
                Serial No. {{eq.serial.toUpperCase()}}
                <!--</q-chip>-->
              </q-item-tile>
            </q-item-main>
          </q-item>

          <q-list>
            <q-item link @click.native="modal=true" v-ripple.mat>
              <q-item-side icon="photo_library"/>
              <q-item-main label="ไฟล์รูปภาพ"/>
              <q-item-side right icon="keyboard_arrow_right"/>
            </q-item>
          </q-list>
        </div>
        <q-item-separator/>

      </q-list>
    </div>
    <Carousel @close="modal = false" :modal="modal"></Carousel>
    <inner-loading :loading="isLoading"/>
  </q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import InnerLoading from 'components/InnerLoading'
  import Carousel from 'components/Carousel'


  export default {
    name: 'detail',
    data: function () {
      return {
        id: this.$route.params.id,
        modal: false
      }
    },
    created() {
    },
    mounted() {
    },
    components: {InnerLoading, Carousel},
    computed: {
      ...mapGetters(['isLoading']),
      ...mapGetters('task', ['tasks', 'getTaskById']), // assuming you are using namespaced modules
      dropWireLength: function () {
        return this.task['dropwire_end'] - this.task['dropwire_begin']
      },
      task() {
        return this.getTaskById(this.id)

      }

      // ...mapGetters('task', ['detailById']),
    },

  }
</script>
