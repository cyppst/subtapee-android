import Vue from 'vue'
import Vuex from 'vuex'

import equipment from './equipment'
import auth from './auth'
import task from './task'
import revoke from './revoke'

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
        revoke,
        equipment,
    }
})

export default store
