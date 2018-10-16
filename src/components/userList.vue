<template>
  <q-list>
    <q-item link :id="user.id"  @click.native="onSelected(user.id)" v-for="(user,index) in engineers" :key="index">
      <q-item-side icon="account_circle" color="primary"/>
      <q-item-main>
        <q-item-tile label>{{user.firstname}} {{user.lastname}}</q-item-tile>
        <q-item-tile sublabel>{{user.firstName}}</q-item-tile>
      </q-item-main>
      <q-item-side right icon="send" />
    </q-item>
  </q-list>
</template>

<script>
  import {mapGetters, mapState, mapActions} from "vuex";
  import InnerLoading from "components/InnerLoading";

  export default {
    // name: 'ComponentName',
    data() {
      return {
        engineers: this.$store.state.engineers,
      }
    },
    mounted() {
      this.fetchEngineer();
    },
    components: {
      InnerLoading
    }
    ,
    computed: {
      ...mapGetters(['isLoading']),

    },
    methods: {
      ...mapActions(['fetchEngineer']),
      onSelected(val) {
        // console.log(id);
        this.$emit('onSelected', val)

      },
    }
  }
</script>

<style>
</style>
