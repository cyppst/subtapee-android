<template>

  <q-modal v-if="this.TaskDialog.show" v-model="TaskDialog.show" minimized ref="modalRef">
    <div style="padding: 50px">
      <div class="q-display-1 q-mb-md">{{row.customer_name}} </div>
      <p>This one has backdrop on small screens too.</p>
      <q-btn color="red" v-close-overlay label="ปิด" />
    </div>
  </q-modal>
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
            // ...mapState('equipment', ['target']),

        },
        props: {
            TaskDialog: {
                show: false,
                id: null
            }
        }, mounted() {
            // this.fetchTarget()
        },
        methods: {
            selected: function (item) {
                this.form.targetId = item.value
            },
            ...mapActions('equipment', ['fetchTarget']),
            submit: function () {
                this.$store.dispatch('equipment/Task', {
                        targetId: this.form.targetId,
                        itemId: this.TaskDialog.id
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
                TaskDialog.show = false
            },
            search: function (term, done) {
                this.$axiosInstance.post('/Task', {q: term})
                    .then(response => {
                        done(parseTargets(response.data))
                    })
            }
        }
    }
</script>
