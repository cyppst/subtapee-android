<template>
  <q-layout view="hHr LpR lFf">
    <!-- Header -->
    <q-layout-header>
      <!-- First row of header is a QToolbar -->
      <q-toolbar>
        <!-- showLeft is a model attached to left side drawer below -->
        <q-icon size="2rem" name="fas fa-broadcast-tower"/>

        <q-toolbar-title>
          {{$route.meta.title}}
          <span slot="subtitle">{{this.fullName}}</span>
        </q-toolbar-title>

        <!-- showRight is a model attached to right side drawer below -->
        <q-btn
          flat round dense
          @click="logout"
          icon="exit_to_app"
        />
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
    <q-layout-footer>
      <q-tabs>
        <q-route-tab slot="title" icon="home" to="/" replace label="หน้าหลัก"/>
        <q-route-tab slot="title" icon="done_all" to="/task" replace label="งานติดตั้ง"/>
        <q-route-tab slot="title" icon="done_all" to="/revoke" replace label="งานถอน"/>
        <q-route-tab slot="title" icon="input" to="/equipment" replace label="อุปกรณ์"/>
        <q-route-tab slot="title" icon="input" to="/material" replace label="วัสดุ"/>
      </q-tabs>
    </q-layout-footer>
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
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'Layout',
    data () {
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
      QListHeader,
    },
    methods: {
      logout: function () {
        this.$q.dialog({
          title: 'ยืนยัน',
          message: 'ออกจากระบบ.',
          ok: 'Agree',
          cancel: 'Disagree'
        }).then(() => {
          this.$store.dispatch('auth/logout', this.form).then(response => {
            this.$router.push('/login')
          })
        }).catch(() => {
          this.$q.notify('Disagreed...')
        })

      }
    },
    computed: {
      ...mapState('auth', ['fullName', 'userName']),  // assuming you are using namespaced modules
      currentPath () {
        return this.$route.path
      },

    }
  }

</script>

<style>
</style>
