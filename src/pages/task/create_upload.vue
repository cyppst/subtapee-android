<template>
  <q-page padding class="row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <q-field>
        <q-uploader ref="uploader"
                    multiple auto-expand
                    @uploaded="uploaded"
                    @add="added"
                    url="http://stp.loc/api/task/upload"
                    method="POST"
                    :headers="headers"
                    :additionalFields="[{name: 'circuit_id', value: this.circuitId}]"/>
      </q-field>
      <div style="padding-top: 15px">
        <q-btn glossy color="primary" :to="task" class="full-width"
               label="จบการทำงาน"/>
      </div>
    </div>
    <inner-loading :loading="isLoading"/>
  </q-page>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import InnerLoading from "components/InnerLoading";

  export default {
    data() {
      return {}
    },
    components: {InnerLoading},
    computed: {
      headers: function () {
        return {
          "Accept": "application/json, text/plain, */*", "Authorization": "Bearer " + window.localStorage['token'] + ""
        }
        // return "{ 'Authorization': 'Bearer " + window.localStorage['token'] + "' }"
        // return "{ 'x-amz-acl': <acl>, 'content-type': <file-type> }"
      },
      ...mapGetters(["isLoading"]),
      circuitId:
        function () {
          return this.$route.params.id;
        },
    },
    methods: {
      ...mapMutations(['SET_LOADING']),
      added(files) {
        setTimeout(() => {
          this.$refs.uploader.upload()
        }, 200)
      }
      ,
      uploaded: function () {
        console.log('uploaded')
      }

    }
    ,
  }
</script>
