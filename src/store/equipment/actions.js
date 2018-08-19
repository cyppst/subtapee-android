import { axiosInstance } from 'plugins/axios.js'

export const refresh = ({ commit }, state) => {
  commit('setLoading', true, { root: true })
  return axiosInstance
    .get('/equipment')
    .then(response => {
      commit('setLoading', false, { root: true })
      commit('SET_EQUIPMENT', response.data)

    })
    .catch(err => {
      commit('setLoading', false, { root: true })
      console.log(err)
    })
}

