<template>
    <q-action-sheet
            v-model="pendingDialog.show"
            title="Action Sheet"
            @ok="onOk"
            @cancel="onCancel"
            @show="onShow"
            @hide="onHide"
            :actions="
            [
            {label: 'ข้อมูลถูกต้อง', icon: 'check_circole',color: 'red',is_accept: true},
            {label: 'ปฏิเสธการรับ', icon: 'cancel_presentation',color: 'red', is_accept: false}
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
                return this.$store.getters['equipment/getPendingById'](this.pendingDialog.id)
            }
        },
        props: {
            pendingDialog: {
                show: false,
                id: null
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions('equipment', ['refresh', 'acceptance']),
            ...mapMutations('isLoading', {root: true}),
            // when props.ok() gets called
            async onOk(item) {
                this.isLoading = true;
                await this.$axiosInstance
                    .post('/equipment/pending/' + this.pendingDialog.id, {
                        is_accept: item.is_accept
                    }).then(response => {
                        this.isLoading = false
                        this.$q.notify({
                            type: 'positive',
                            message: response.data.message
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
