import {axiosInstance} from 'plugins/axios.js'

export const refresh = ({commit}) => {
  commit('setLoading', true, {root: true})
  return axiosInstance
    .get('/equipment')
    .then(response => {
      commit('setLoading', false, {root: true})
      commit('SET_EQUIPMENT', response.data)

    })
    .catch(err => {
      commit('setLoading', false, {root: true})
      console.log(err)
    })
}

export const transfer = ({commit}, payload) => {
  commit('setLoading', true, {root: true})
  return axiosInstance
    .post('/equipment/' + payload.id + '/transfer', {
      user_id: payload.user_id,
    })
    .then(() => {
      this.store.equipment.$dispatch('refresh')
      commit('setLoading', false, {root: true})
    })
    .catch(err => {
      commit('setLoading', false, {root: true})
      console.log(err)
    })
}
export const acceptance = ({commit}, payload) => {
  commit('setLoading', true, {root: true})
  return axiosInstance
    .post('/equipment/pending/' + payload.id, {
      is_accepted: payload.is_accepted,
    })
    .then(() => {
      commit('setLoading', false, {root: true})
      this.store.equipment.$dispatch('refresh')
    })
    .catch(err => {
      commit('setLoading', false, {root: true})
      console.log(err)
    })
}

