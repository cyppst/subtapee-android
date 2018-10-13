<template>
  <q-page padding class="row justify-center">
    <div style="width: 100vw ;">

      <q-list>
        <q-collapsible group="somegroup" icon="explore" label="รายละเอียด" opened>
          <q-item>
            <q-item-main>
              <q-item-tile label>เลขวงจร</q-item-tile>
              <q-item-tile sublabel>{{circuit['circuit_id']}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label>ชื่อลูกค้า</q-item-tile>
              <q-item-tile sublabel>{{circuit['customer_name']}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item v-if="circuit['service_fees']">
            <q-item-main>
              <q-item-tile label>เก็บค่าบริการ</q-item-tile>
              <q-item-tile sublabel>{{circuit['service_fees']}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-item-tile label>ระยะสาย</q-item-tile>
              <q-item-tile sublabel>{{circuit['dropwire_begin']}} - {{circuit['dropwire_end']}} ({{dropWireLength}})</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item v-if="circuit['remarks']">
            <q-item-main>
              <q-item-tile label>หมายเหตุ</q-item-tile>
              <q-item-tile sublabel>{{circuit['remarks']}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item-separator />
        </q-collapsible>
        <q-collapsible v-if="equipments.length>0" group="somegroup" icon="perm_identity" label="อุปกรณ์">
          <q-item id="e.id" v-for="e in equipments">
            <q-item-main>
              <q-item-tile label>{{e.equipment.brand}} {{e.equipment.model}} </q-item-tile>
              <q-item-tile sublabel>
                <q-chip small square class="q-mr-xs" color="secondary">
                  {{e.equipment.category.name}}
                </q-chip>
                <q-chip small square class="q-mr-xs" color="primary">
                S/N : {{e.serial.toUpperCase()}}
                </q-chip>
              </q-item-tile>
            </q-item-main>
            <q-item-separator />
          </q-item>
        </q-collapsible>
        <q-collapsible v-if="photos.length>0" group="somegroup" icon="shopping_cart" label="รูปภาพ">
          <div>
            <img id="photo.id" v-for="photo in photos" :src="photo.fileName" class="responsive">
          </div>
        </q-collapsible>
      </q-list>
    </div>
    <inner-loading :loading="isLoading"/>
  </q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import InnerLoading from 'components/InnerLoading'

  export default {
    name: 'detail',
    data: function() {
      return {
        circuit: [],
        equipments:[],
        photos:[],
      }
    },
    created() {
      console.log(this.$route.params.id);
    },
    mounted: function () {
      this.$axiosInstance.get('/task/'+this.$route.params.id)

        .then(response => {
       this.circuit = response.data.circuit ;
       this.equipments= response.data.equipments ;
       this.photos= response.data.photos;
        }).catch(err => {
        throw err
      })
    },
    components: {InnerLoading},
    computed: {
      ...mapGetters(['isLoading']),
      dropWireLength: function () {
        return this.circuit['dropwire_end'] - this.circuit['dropwire_begin']
      }
      // ...mapGetters('task', ['detailById']),
    },
    methods: {

    },
  }
</script>
