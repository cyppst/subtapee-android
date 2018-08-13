<template>
<q-layout view="hHr LpR lFf">
  <!-- Header -->
  <q-layout-header>
    <!-- First row of header is a QToolbar -->
    <q-toolbar>
      <!-- showLeft is a model attached to left side drawer below -->
      <q-btn
        flat round dense
        @click="showLeft = !showLeft"
        icon="menu"
      />

      <q-toolbar-title>
        STP Engineer
        <span slot="subtitle">by Golfcomsci57</span>
      </q-toolbar-title>

      <!-- showRight is a model attached to right side drawer below -->
      <q-btn
        flat round dense
        @click="showRight = !showRight"
        icon="notifications"
      />
    </q-toolbar>


  </q-layout-header>

  <!-- Left Side Drawer -->
  <q-layout-drawer side="left" >
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item to="/forum">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item to="/chat">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </q-layout-drawer>

  <!-- Right Side Panel -->
  <q-layout-drawer side="right" >
    Right Side of Layout
  </q-layout-drawer>

  <!-- sub-routes get injected here: -->
  <q-page-container>
    <router-view />
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer>
      <q-tabs>
      <q-route-tab slot="title" icon="home" to="/dashboard" replace label="หน้าหลัก" />
      <q-route-tab slot="title" icon="done_all" to="/task" replace label="ประวัติ" />
      <q-route-tab slot="title" icon="input" to="/" replace label="อุปกรณ์" />
    </q-tabs>
  </q-layout-footer>
</q-layout>
</template>


<script>
import {
  GoBack,
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
} from "quasar";

export default {
  name: "Layout",
  data() {
    return {
      title: 'aa',
      leftDrawer: true
    };
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
  computed: {
    currentPath() {
      return this.$route.path;
    },
    //   swiped(obj) {
    //     let path = this.currentPath;
    //     let goto = function() {
    //       if (obj.direction == "right") {
    //         if (path === "/home") {
    //           return;
    //         } else if (path === "/about") {
    //           return "/home";
    //         } else if (path === "/contact") {
    //           return "/about";
    //         } else {
    //           return "/contact";
    //         }
    //       } else if (obj.direction == "left") {
    //         if (path === "/home") {
    //           return "/about";
    //         } else if (path === "/about") {
    //           return "/contact";
    //         } else if (path === "/contact") {
    //           return "/more";
    //         } else {
    //           return;
    //         }
    //       }
    //     };
    //     // If swipe is less than half window width, return
    //     if (Math.abs(obj.distance.x) < 0.5 * window.innerWidth) {
    //       return;
    //     }
    //     // If goto returns a path, push to the router
    //     if (goto()) {
    //       this.$router.push(goto());
    //     }
    //   } // end swiped()
    // }
    // routeList () {
    //   return this.$router.options.routes.map((route) => route.path )}
  }
};
</script>

<style>
</style>
