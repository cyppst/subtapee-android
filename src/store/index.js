import Vue from 'vue'
import Vuex from 'vuex'

import equipment from './equipment'
import auth from './auth'
import task from './task'

import * as getters from './root/getters'
import * as mutations from './root/mutations'
import state from './root/state'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  modules: {
    auth,
    task,
    equipment,
  }
})

export default store
