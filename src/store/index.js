import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './tasks'
import loader from './loader'
import network from './network'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      network,
      loader,
      tasks
    }
  })

  return Store
}
