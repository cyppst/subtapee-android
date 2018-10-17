<template>
  <q-layout view="hHr LpR lFf">
    <!-- Header -->
    <q-layout-header>
      <!-- First row of header is a QToolbar -->
      <q-toolbar>
        <!-- showLeft is a model attached to left side drawer below -->
        <!--<q-icon size="2rem" name="fas fa-broadcast-tower"/>-->
        <img class="text-center" style="max-width: 2rem;" src="~assets/tower.svg"/>

        <q-toolbar-title>
          {{$route.meta.title}}
          <span slot="subtitle">{{$route.meta.subtitle}}</span>
        </q-toolbar-title>

        <!-- showRight is a model attached to right side drawer below -->
        <q-btn
          flat round dense
          @click="this.clearLocalStorage"
          icon="error_outline">
          <q-tooltip anchor="top left" self="bottom left" :offset="[10, 10]">
            <strong>คลิก</strong> หากทำอะไรไม่ได้
          </q-tooltip>
        </q-btn>
        <q-btn
          flat round dense
          @click="this.getAPK"
          icon="system_update"
        >
          <q-tooltip anchor="top left" self="bottom left" :offset="[10, 10]">
            อัพเดท App
          </q-tooltip>
        </q-btn>
      </q-toolbar>

    </q-layout-header>

    <!-- Left Side Drawer -->
    <q-layout-drawer side="left">
      <q-list no-border link inset-separator>
        <q-list-header>Essential Links</q-list-header>
        <q-item to="/docs">
          <q-item-side icon="school"/>
          <q-item-main label="Docs" sublabel="quasar-framework.org"/>
        </q-item>
        <q-item to="/forum">
          <q-item-side icon="record_voice_over"/>
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org"/>
        </q-item>
        <q-item to="/chat">
          <q-item-side icon="chat"/>
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg"/>
        </q-item>
        <q-item to="/twitter">
          <q-item-side icon="rss feed"/>
          <q-item-main label="Twitter" sublabel="@quasarframework"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <!-- Right Side Panel -->
    <q-layout-drawer side="right">
      Right Side of Layout
    </q-layout-drawer>
    <!-- sub-routes get injected here: -->
    <q-page-container>
      <router-view/>
    </q-page-container>
    <!-- Footer -->
    <q-layout-footer v-model="$route.meta.footerPanel">
      <q-tabs>
        <q-route-tab slot="title" icon="home" to="/" replace label="หน้าหลัก1"/>
        <q-route-tab slot="title" icon="done_all" to="/task" replace label="งานติดตั้ง"/>
        <q-route-tab slot="title" icon="done_all" to="/revoke" replace label="งานถอน"/>
        <q-route-tab slot="title" icon="input" to="/equipment" :alert="hasPending.equipment.alert"
                     :count="hasPending.equipment.count" replace label="อุปกรณ์"/>
        <q-route-tab slot="title" icon="input" to="/material" :alert="hasPending.material.alert"
                     :count="hasPending.material.count"
                     replace label="วัสดุ"/>

      </q-tabs>
    </q-layout-footer>

    <q-layout-footer v-if="$route.meta.footerPanel===false">
      <q-tabs>
        <q-route-tab slot="title" icon="keyboard_return" to="" @click="$router.go(-1)" replace label=" ย้อนกลับ"/>
      </q-tabs>
    </q-layout-footer>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        size="lg"
        color="primary"
        v-if="$route.meta.createLink"
        :to="$route.meta.createLink"
        icon="add"
      />
    </q-page-sticky>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QBtn,
    QIcon,
    QToolbarTitle,
    QList,
    QItemSide,
    QItemMain,
    QItem,
    QItemTile,
    QListHeader
  } from 'quasar'
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Layout',
    data() {
      return {
        title: 'aa',
        leftDrawer: true
      }
    },
    components: {
      QLayout,
      QToolbar,
      QBtn,
      QIcon,
      QToolbarTitle,
      QList,
      QItemSide,
      QItemMain,
      QItem,
      QItemTile,
      QListHeader
    },
    mounted() {
      this.fetchPending();
      this.fetchAnnounce()
    },
    methods: {
      ...mapActions([
        'fetchPending', 'fetchAnnounce' // map `this.increment()` to `this.$store.dispatch('increment')`
      ]),
      getAPK: function () {
        window.location = 'https://stock.suptapee.com/android'
      },
      clearLocalStorage: function () {
        localStorage.clear();
        this.$q
          .dialog({
            title: 'ยืนยัน',
            message: 'ออกจากระบบ.',
            ok: 'Agree',
            cancel: 'Disagree'
          })
          .then(() => {
            this.$store.dispatch('auth/logout', this.form).then(response => {
              this.$router.push('/login')
            })
          })
          .catch(() => {
            this.$q.notify('Disagreed...')
          })
      }
    }
    ,
    computed: {
      ...mapState('auth', ['fullName', 'userName']), // assuming you are using namespaced modules
      ...mapGetters(['hasPending'])
      // hasPending () {
      //   return {
      //     'equipment': this.pending.equipment > 0,
      //     'material': this.pending.material > 0
      //   }
    },
    // countPendingEquipment () {
    //   return this.$store.state.countPendingEquipment
    // },
    // countPendingMaterial () {
    //   return this.$store.state.countPendingEquipment
    // },
    currentPath() {
      return this.$route.path
    }
  }
</script>

<style>
</style>
