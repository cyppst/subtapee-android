<template>
    <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="teal-4"/>
    </q-inner-loading>
</template>

<script>
    export default {
        props: ['loading'],
        data() {
            return {}
        }
    }
</script>

<style>
</style>
