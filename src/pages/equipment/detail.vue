<template>
  <q-page>
    <div style="width: 100vw ;">
      <q-list>
        <q-list-header>รายละเอียด</q-list-header>
        <q-item>
          <q-item-main>
            <q-item-tile label>ประเภท</q-item-tile>
            <q-item-tile sublabel>{{Equip.Equipment.category.name}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>ยี่ห้อ</q-item-tile>
            <q-item-tile sublabel>{{Equip.Equipment.brand}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>รุ่น</q-item-tile>
            <q-item-tile sublabel>{{Equip.Equipment.model}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item-separator/>
        <q-item>
          <q-item-main>
            <q-item-tile label>หมายเลขซีเรียล</q-item-tile>
            <q-item-tile sublabel>{{Equip.serial}}</q-item-tile>
          </q-item-main>
        </q-item>
        <div v-if="Equip.serial"></div>
        <q-item>
          <q-item-main>
            <q-item-tile label>รับอุปกรณ์เมื่อ</q-item-tile>
            <q-item-tile sublabel>{{Equip.updated_at}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-btn glossy color="primary" :to="{name: 'equipment-transfer', params: {id: Equip.id}}" class="full-width"
                 label="เปลี่ยนผู้ถืออุปกรณ์"/>
        </q-item>
      </q-list>

    </div>
    <inner-loading :loading="isLoading"/>
  </q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from "vuex";
  import InnerLoading from "components/InnerLoading";


  export default {
    name: "detail",
    data: function () {
      return {
        id: this.$route.params.id,

        terms: '',
        form: {
          targetId: ''
        }
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {},
    components: {InnerLoading},
    computed: {
      ...mapGetters(["isLoading"]),
      ...mapGetters("equipment", ["equipments", "getOnHandById"]), // assuming you are using namespaced modules
      Equip() {
        return this.getOnHandById(this.id);
      }
    }
  };
</script>
