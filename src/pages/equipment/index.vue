<template>
    <q-page padding>
        <!-- content -->
        <q-list highlight>
            <q-list-header>รอการตรวจสอบ</q-list-header>
            <q-item>
                <q-item-side>
                    <q-item-tile avatar>
                        <img src="assets/linux-avatar.png">
                    </q-item-tile>
                </q-item-side>
                <q-item-main label="John Doe"/>
                <q-item-side right>
                    <router-link :to="{ name: 'transfer', params: { id: 1 } }">go</router-link>

                    <q-item-tile icon="chat_bubble" color="green"/>
                </q-item-side>
            </q-item id="1" v-touch-home="transferDialog">
            <q-item>
                <q-item-side avatar="assets/linux-avatar.png"/>
                <q-item-main label="Jim Doe"/>
                <q-item-side right icon="chat_bubble"/>
            </q-item>
            <q-item-separator/>
            <q-list-header>ที่ท่านทำลังถือ</q-list-header>
            <q-item :id="111" v-touch-hold="EquipmentAction">
                <q-item-side avatar="assets/linux-avatar.png"/>
                <q-item-main label="Jack Doe"/>
            </q-item>
        </q-list>
        <EquipTransfer :transferDialog="transferDialog"></EquipTransfer>
    </q-page>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import EquipTransfer from './EquipTransfer'

    export default {
        name: 'Equipment',
        data() {
            return {
                transferDialog: {
                    show: false,
                    targetId: ''
                }
            }
        },
        components: {EquipTransfer},
        mounted() {
            this.refresh()
        },
        computed: mapState(['onHand', 'pending', 'target'
        ]),
        methods: {
            ...mapActions('equipment', ['refresh', 'transfer', 'response']),
            EquipmentAction:
                function (obj) {
                    console.log('long touch');
                    this.transferDialog.show = true;
                    this.transferDialog.id = obj.evt.target.id;
                }
        }
    }
</script>

<style>
</style>
