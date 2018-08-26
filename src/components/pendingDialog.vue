<template>
    <q-dialog
            v-if="this.item"
            v-model="pendingDialog.show"
            prevent-close
            @ok="onOk"
            @cancel="onCancel"
            @show="onShow"
            @hide="onHide"
    >
        <!-- This or use "title" prop on <q-dialog> -->
        <span slot="title">Pending Equipment</span>

        <!-- This or use "message" prop on <q-dialog> -->
        <span slot="message">
            <p class="text-white-thin">กรุณาตรวจสอบความถูกต้องของอุปกรณ์ที่ท่านได้รับ</p>
        </span>
        <div slot="body">
            <dl class="horizontal">
                <dt>Date/Time :</dt>
                <dd>@{{this.item.pivot.created_at}}</dd>
                <dt>Equipment :</dt>
                <dd>{{this.item.brand}} / {{this.item.model}}</dd>
                <dt>S/N :</dt>
                <dd>{{this.item.pivot.serial}}</dd>
            </dl>
        </div>


        <template slot="buttons" slot-scope="props">
            <q-btn color="primary" label="ถูกต้อง" @click="choose(props.ok, 'Superman')"/>
            <q-btn label="ไม่ถูกต้อง" @click="props.cancel"/>
        </template>
    </q-dialog>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        // name: 'PendingEquipment',
        data() {
            return {
                name: 'aaa',
                customDialogModel: true,
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
            ...mapActions('equipment', ['acceptance']),
            // when props.ok() gets called
            onOk() {
                this.acceptance({'id': this.pendingDialog.id, 'isAccepted': 1});

                console.log('ok' + this.pendingDialog.id)
            },

            // when props.cancel() gets called
            onCancel() {
                this.acceptance({'id': this.pendingDialog.id, 'isAccepted': 0})

            },

            // when we show it to the user
            onShow() {
                console.log('show')
            },

            // when it gets hidden
            onHide() {
            },

            // custom handler
            // async choose(okFn, hero) {
            //     if (this.name.length === 0) {
            //         this.$q.dialog({
            //             title: 'Please specify your name!',
            //             message: `Can't buy tickets without knowing your name.`
            //         })
            //     }
            //     else {
            //         await okFn()
            //         this.$q.notify(`Ok ${this.name}, going with ${hero}`)
            //     }
            // }
        }
    }
</script>
