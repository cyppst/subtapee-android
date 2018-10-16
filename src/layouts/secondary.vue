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
          <span slot="subtitle">{{this.fullName}}</span>
        </q-toolbar-title>

        <q-btn
          flat round dense
          @click=""
          icon="system_update"
        >
          <q-tooltip anchor="top left" self="bottom left" :offset="[10, 10]">
            อัพเดท App
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <!-- sub-routes get injected here: -->
    <q-page-container>
      <router-view/>
    </q-page-container>
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
    name: 'secondary',
    data() {
      return {},
        components
    :
      {
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
      }
    ,
      mounted()
      {

      }
    ,
      methods: {
      }
    ,
      computed: {
        currentPath()
        {
          return this.$route.path
        }
      }
    }
</script>

<style>
</style>
