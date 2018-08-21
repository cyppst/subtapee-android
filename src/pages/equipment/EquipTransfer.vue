<template>
    <q-dialog
            v-model="transferDialog.show"
            stack-buttons
            prevent-close
    >
        <!-- This or use "title" prop on <q-dialog> -->
        <span slot="title">โยกอุปกรณ์</span>

        <!-- This or use "message" prop on <q-dialog> -->
        <span slot="message">กรุณาระบุผู้ใช้ที่ต้องการโยกอุปกรณ์ไปยัง</span>

        <div slot="body">
            <q-select
                    v-model="form.targetId"
                    float-label="ระบุผู้ใช้"
                    radio
                    :options="target"
                    @input="submit"></q-select>

        </div>

        <template slot="buttons" slot-scope="props">
            <q-btn flat label="ยกเลิก" @click="props.cancel"/>
        </template>
    </q-dialog>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                form: {
                    targetId: ''
                }
//
            }
        },
        computed: {
            ...mapState('equipment', ['target']),
        },
        props: ['transferDialog'],
        mounted() {
            this.fetchTarget()
        },
        methods: {
            ...mapActions('equipment', ['fetchTarget']),
            submit: function () {

                this.$store.dispatch('equipment/transfer', {
                        targetId: this.form.targetId,
                        itemId: this.transferDialog.id
                    })
                    .then(response => {
                        this.$router.push('/');
                        this.$q.notify({
                            type: 'positive', response
                        })
                    }).catch(err => this.$q.notify({type: 'negative', err})
                )
            },
            onCancel() {
                transferDialog.show = false

            }
            ,
        }
    }

</script>