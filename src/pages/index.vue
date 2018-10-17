<template>
  <div>
    <q-pull-to-refresh pull-message="ดึงเพื่อโหลด" release-message="ปล่อย" refresh-message="กำลังโหลด"
                       :handler="refresher">
      <q-page>
        <div v-if="this.announce.length===0" class="row">
          <div class="absolute-center text-center">
            <img class="text-center" style="max-width: 60%;" src="assets/tower.svg"/>
            <hr>
            <span class="text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"><strong>ไม่พบ</strong>
                    รายการ</span>

          </div>
        </div>
        <q-list highlight inset-separator>
          <q-item link @click.native="openDialog(row)" v-for="(row,index) in announce" :key="row.id" multiline>
            <q-item-side avatar="statics/topic.png"/>
            <q-item-main :label="row.title">
              <q-item-tile sublabel lines="2">
                {{row.body}}
              </q-item-tile>
            </q-item-main>
            <q-item-side tamp="row.created_at" right>
              <q-item-tile stamp>
                <timeago :datetime="row.created_at"></timeago>
              </q-item-tile>
            </q-item-side>
          </q-item>
        </q-list>
        <inner-loading :loading="isLoading"/>
      </q-page>
    </q-pull-to-refresh>
    <q-modal v-model="opened" maximized :content-css="{minWidth: '50vw'}">
      <div style="padding: 50px">
        <div class="q-headline text-weight-bold q-mb-md">{{currentData.title}}</div>
        <blockquote>
          <p>{{currentData.body}}</p>
          <small>ประกาศเมื่อ {{currentData.created_at}}</small>
        </blockquote>
        <div style="padding: 15px">
          <q-btn
            color="primary"
            @click="opened = false"
            label="ปิด"
          />
        </div>
      </div>
    </q-modal>
  </div>
</template>
<style>
</style>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import InnerLoading from 'components/InnerLoading'

  export default {
    name: 'index',
    data() {
      return {
        opened: false,
        currentData: {}
      }
    },
    mounted() {
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
      openDialog: function (row) {
        this.opened = true;
        this.currentData = row
      },
      refresher: function (done) {
        this.fetchAnnounce().then(() => done())
      }
    },
  }
</script>
