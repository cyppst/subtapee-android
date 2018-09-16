<template>
    <q-page>
        <div class="absolute-center text-center">
            <img class="text-center" style="max-width: 60%;" src="~assets/tower.svg" />
            <hr>
            <span class="text-center q-display-1 text-weight-semibold ">ยินดีต้อนรับสู่ <strong>Subtapee</strong>
                App</span>
        </div>

        <inner-loading :loading="isLoading" />
    </q-page>
</template>
<style>
</style>

<script>
    import { mapGetters, mapState, mapActions } from "vuex";
    import InnerLoading from "components/InnerLoading";

    export default {
        name: "index",
        components: { InnerLoading },
        computed: {
            ...mapGetters(["isLoading"])
        }
    };
</script>