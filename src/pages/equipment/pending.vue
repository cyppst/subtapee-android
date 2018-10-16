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
            <q-item-tile label>วันที่ได้รับคำขอ</q-item-tile>
            <q-item-tile sublabel>{{Equip.created_at}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-btn glossy color="positive" class="full-width" @click.native="dialog=true" label="ตรวจรับอุปกรณ์"/>
        </q-item>
      </q-list>
    </div>
    <q-action-sheet
      v-model="dialog"
      title="ตรวจสอบความถูกต้อง"
      @ok="onOk"
      @cancel="onCancel"
      @show="onShow"
      @hide="onHide"
      :actions="
            [
            {label: 'ข้อมูลถูกต้อง', icon: 'check_circle',color: 'green',is_accept: true},
            {label: 'ปฏิเสธการรับ', icon: 'cancel_presentation',color: 'red', is_accept: false}
            ]"
    />
    <inner-loading :loading="isLoading"/>
  </q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from "vuex";
  import InnerLoading from "components/InnerLoading";
  import Carousel from "components/Carousel";

  export default {
    name: "detail_pending",
    data: function () {
      return {
        id: this.$route.params.id,
        dialog: false,
        modal: false
      };
    },
    created() {
    },
    mounted() {
    },
    components: {InnerLoading, Carousel},
    computed: {
      ...mapGetters(["isLoading"]),
      ...mapGetters("equipment", ["equipments", "getPendingById"]), // assuming you are using namespaced modules
      Equip() {
        return this.getPendingById(this.id);
      },
    },
    methods: {
      ...mapActions(['isLoading']),
      ...mapActions('equipment', ['refresh', 'acceptance']),
      // when props.ok() gets called
      async onOk(item) {
        this.isLoading = true;
        await this.$axiosInstance
          .post('/equipment/pending/' + this.id, {
            is_accept: item.is_accept
          }).then(response => {
            this.isLoading = false
            this.$q.notify({
              type: 'positive',
              message: response.data.message
            })
            this.router.push('/task')
          })
          .catch(err => {
            this.isLoading = false
            this.$q.notify(err)
          })
        this.refresh();
      },
      // when props.cancel() gets called
      onCancel() {
        console.log('aa')

      },

      // when we show it to the user
      onShow() {
        console.log('aa')

      },

      // when it gets hidden
      onHide() {
        console.log('aa')
      }
    }

  };
</script>
