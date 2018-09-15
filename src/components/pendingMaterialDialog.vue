<template>
    <q-action-sheet
            v-model="pendingMaterialDialog.show"
            title="Action Sheet"
            @ok="onOk"
            @cancel="onCancel"
            @show="onShow"
            @hide="onHide"
            :actions="
            [
            {label: 'ข้อมูลถูกต้อง', icon: 'delete',color: 'red',is_accept: true},
            {label: 'ปฏิเสธการรับ', icon: 'delete',color: 'red', is_accept: false}
            ]"
    />
    <!--
      there's an optional "title" slot if you have
      something very specific for the ActionSheet title
      (it replaces "title" prop)
    -->
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'

    export default {
        // name: 'PendingEquipment',
        data() {
            return {
                name: 'aaa',
            }
        },
        computed: {
            item() {
                return this.$store.getters['material/getPendingById'](this.pendingMaterialDialog.id)
            }
        },
        props: {
            pendingMaterialDialog: {
                show: false,
                id: null
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions('material', ['refresh', 'acceptance']),
            ...mapMutations('isLoading', {root: true}),
            // when props.ok() gets called
            async onOk(item) {
                this.isLoading = true;
                await this.$axiosInstance
                    .post('/material/pending/' + this.pendingMaterialDialog.id, {
                        is_accept: item.is_accept
                    }).then(response => {
                        this.isLoading = false
                        this.$q.notify({
                            type: 'positive',
                            message: response.message
                        })
                    })
                    .catch(err => {
                        this.isLoading = false
                        this.$q.notify(err)
                    })
                this.refresh();
            },
            // when props.cancel() gets called
            onCancel() {
                console.log('aa')

            },

            // when we show it to the user
            onShow() {
                console.log('aa')

            },

            // when it gets hidden
            onHide() {
                console.log('aa')
            }
        }
    }
</script>
