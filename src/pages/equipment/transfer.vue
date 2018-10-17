<template>
  <q-page>
    <div style="width: 100vw ;">
      <q-list>
        <q-item link :id="user" @click.native="onSelected(user)" v-for="(user,index) in engineers" :key="index">
          <q-item-side icon="account_circle" color="primary"/>
          <q-item-main>
            <q-item-tile label>{{user.firstname}} {{user.lastname}}</q-item-tile>
            <q-item-tile v-if="user.lastseen" sublabel>{{user.lastseen}}</q-item-tile>
          </q-item-main>
          <q-item-side right icon="send"/>
        </q-item>
      </q-list>
    </div>
    <q-action-sheet
      v-model="actionSheet"
      :title="actionSheetTitle"
      @ok="onOk"
      :actions="this.actions"
    />
    <inner-loading :loading="isLoading"/>
  </q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapMutations, mapActions} from "vuex";
  import InnerLoading from "components/InnerLoading";


  export default {
    name: "equipment_transfer",
    data: function () {
      return {
        equipId: this.$route.params.id,
        userId: '',
        userName: '',
        actionSheet: false,
        actions: [
          {
            label: 'ยืนยัน',
            color: 'positive',
            icon: 'check_circle', // specify ONLY IF using icon
            handler: this.doTransfer
          },
          {
            label: 'ยกเลิก',
            color: 'negative',
            icon: 'clear', // specify ONLY IF using icon

          }
        ]
      };
    },
    created() {
    },
    mounted() {
      if (!this.engineers.length)
        this.fetchEngineer();
    },
    methods: {
      ...mapActions('equipment', ['refresh']),
      ...mapActions(['fetchEngineer']),
      onSelected(obj) {
        this.userName = obj.firstname + ' ' + obj.lastname;
        this.userId = obj.id;
        this.actionSheet = !this.actionSheet

      },
      doTransfer() {
        this.$store.commit("setLoading", true, {root: true})
        this.$axiosInstance.post('equipment/transfer', {
          equip_id: this.equipId,
          user_id: this.userId
        })
          .then(response => {
            this.$store.commit("setLoading", false, {root: true})
            this.$q.notify({
              color: 'positive',
              message: response.data.message
            });
            this.refresh().then(

            );
            this.$router.push('/equipment')

          })
          .catch(e => {
            this.$store.commit("setLoading", false, {root: true})
            this.errors.push(e)
          })
      },
      onOk(item) {
        if (item.handler) {
          // if we've already triggered a handler
          return
        }
        console.log('aa' + item);
        this.$q.notify({
          color: 'secondary',
          message: `Clicked on "${item.label}"`
        })
      },
      onCancel() {

      },
    },

    components: {InnerLoading},
    computed: {
      ...mapGetters(["isLoading"]),
      ...mapGetters("equipment", ["equipments", "getOnHandById"]), // assuming you are using namespaced modules
      engineers: function () {
        return this.$store.state.engineers;
      },
      actionSheetTitle: function () {
        return 'เปลี่ยนผู้ถือเป็น "' + this.userName + '" ใช่หรือไม่?'
      },

    }
  };
</script>
