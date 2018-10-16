<template>
  <transition
    appear
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="teal-4"/>
    </q-inner-loading>
  </transition>

</template>

<script>
  import 'quasar-extras/animate/fadeIn.css'
  import 'quasar-extras/animate/fadeOut.css'

  export default {
    props: ['loading'],
    data() {
      return {}
    }
  }
</script>

<style>


</style>
