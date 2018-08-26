<template>
    <q-page class="flex flex-center">
        <div class="q-display-3">Subtapee App</div>
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
        components: {InnerLoading},
        computed: {
            ...mapGetters(['isLoading']),
        }
    }
</script>
