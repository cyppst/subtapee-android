<template>
 <q-dialog
        v-model="customDialogModel"
        stack-buttons
        prevent-close
        @ok="onOk"
        @show="!Vue.auth.isLoggedin()">
        <!-- This or use "title" prop on <q-dialog> -->
        <span slot="title">Login</span>

        <!-- This or use "message" prop on <q-dialog> -->
        <span slot="message">What is your superhero of choice?</span>

        <div slot="body">
          <q-field
            icon="account_circle"
            helper="We need your name so we can send you to the movies."
            label="Your name"
            :label-width="3"
            :error="nameError"
          >
            <q-input v-model="name" />
          </q-field>
        </div>

        <template slot="buttons" slot-scope="props">
          <q-btn color="primary" label="Choose Superman" @click="choose(props.ok, 'Superman')" />
          <q-btn color="black" label="Choose Batman" @click="choose(props.ok, 'Batman')" />
          <q-btn color="negative" label="Choose Spiderman" @click="choose(props.ok, 'Spiderman')" />
          <q-btn flat label="No thanks" @click="props.cancel" />
        </template>
      </q-dialog>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  }
};
</script>

<style>
</style>
