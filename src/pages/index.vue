<template>
  <q-page>
      <q-list highlight inset-separator>
        <q-item :id="row.id" v-for="row in announce"  multiline>
          <q-item-side avatar="statics/topic.png" />
          <q-item-main  :label="row.title" >
            <q-item-tile sublabel lines="2">
         {{row.body}}
            </q-item-tile>
          </q-item-main>
          <q-item-side tamp="row.created_at" right>
            <q-item-tile stamp><timeago :datetime="row.created_at"></timeago></q-item-tile>
          </q-item-side>
        </q-item>
      </q-list>
    <inner-loading :loading="isLoading"/>
</q-page>

</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import InnerLoading from 'components/InnerLoading'

  export default {
    name: 'index',
    data () {
      return {
        opened: false
      }
    },
    components: {InnerLoading},
    computed: {
      ...mapGetters(['isLoading']),
      ...mapState(['announce'])
    },
    methods: {
      ...mapActions([
        'fetchAnnounce', // map `this.increment()` to `this.$store.dispatch('increment')`
      ]),
    },
  }
</script>
