<template>
<q-page padding class="row justify-center">
  <div style="width: 500px; max-width: 90vw;">
      <q-list highlight inset-separator>
        <q-item v-for="row in announce"  multiline>
          <q-item-side avatar="statics/topic.png" />
          <q-item-main  :label="row.title" >
            <q-item-tile sublabel lines="2">
         {{row.body}}
            </q-item-tile>
          </q-item-main>
          <q-item-side tamp="row.created_at" right>
            <q-item-tile stamp>{{row.created_at}}</q-item-tile>
          </q-item-side>
          <q-modal v-model="opened[row.id]">
            <h4>{{row.title}}</h4>
            <q-btn
              color="primary"
              @click="opened[row.id] = false"
              label="Close"
            />
          </q-modal>
        </q-item>


      </q-list>
    </div>
  <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
  </q-modal>
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
