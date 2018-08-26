<template>
    <q-dialog
            v-if="this.transferDialog.show"
            v-model="transferDialog.show"
            stack-buttons
            prevent-close
    >
        <!-- This or use "title" prop on <q-dialog> -->
        <span slot="title">โยกอุปกรณ์ <q-chip class="shadow-1" square small
                                              color="primary">{{this.transferDialog.id}}</q-chip></span>


        <!-- This or use "message" prop on <q-dialog> -->
        <span slot="message">กรุณาระบุผู้ใช้ที่ต้องการโยกอุปกรณ์ไปยัง</span>

        <div slot="body">
            <!--<q-select-->
            <!--v-model="form.targetId"-->
            <!--float-label="ระบุผู้ใช้"-->
            <!--radio-->
            <!--:options="target"-->
            <!--@input="submit"></q-select>-->

            <q-input color="amber" v-model="form.targetId" placeholder="Type 'fre'">
                <q-autocomplete
                        @search="search"
                        @selected="selected"
                        :min-characters="0"
                        value-field="icon"
                />
            </q-input>
        </div>

        <template slot="buttons" slot-scope="props">
            <q-btn flat label="ยกเลิก" @click="props.cancel"/>
        </template>
    </q-dialog>
</template>
<script>
    function parseTargets(targets) {
        return targets.map(target => {
            let nameaa = target.label;
            return {
                label: nameaa,
                value: target.value
            }
        })
    }

    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                form: {
                    targetId: ''
                }
            }
        },
        computed: {
            ...mapState('equipment', ['target']),

        },
        props: {
            transferDialog: {
                show: false,
                id: null
            }
        }, mounted() {
            this.fetchTarget()
        },
        methods: {
            selected: function (item) {
                this.form.targetId = item.value
            },
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
            },
            verifySerial: function () {
                let serial = this.form.serial;
                if (!this.isVerified) {
                    this.$axiosInstance
                        .post('/equipment/fetchuser', {body: serial})
                        .then(response => {
                            console.log(response.data);
                            done(parseTargets(response.data))
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            },
            search: function (term, done) {
                this.$axiosInstance.get('/equipment/target', {query: term})
                    .then(response => {
                        done(parseTargets(response.data))
                    })
            }
        }
    }
</script>