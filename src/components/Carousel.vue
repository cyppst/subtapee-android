<template>
    <q-modal v-model="modal" @hide="close" maximized>
      <q-carousel
        color="white"
        arrows
        quick-nav
        class="text-white full-height"
      >
        <q-carousel-slide img-src="https://picsum.photos/g/1024/768" />
        <q-carousel-slide img-src="https://picsum.photos/g/1024/768" />
        <q-carousel-slide img-src="https://picsum.photos/g/1024/768" />



        <q-carousel-control
          slot="control-full"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <q-btn
            rounded push
            color="primary"
            icon="close"
            label="ปิด"
            @click="close"
          />
        </q-carousel-control>
      </q-carousel>
    </q-modal>
</template>

<script>
  import { colors } from 'quasar'

  export default {
    name: 'Carousel',
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow',
          'red',
          'orange',
          'grey-2'
        ], }
    },
    methods: {
      close: function () {
        this.$emit('close');
      }
    },
    components: {colors},
    props: {
      modal: {
        default: false
      }
    }
  }
</script>
