import {axiosInstance} from 'plugins/axios'
import {QSpinnerGears} from 'quasar'

export const refresh = ({commit}
) => {
  commit('setLoading', true, {root: true})
  axiosInstance.get('/task')
    .then(response => {
      commit('SET_TASKS', response.data)
      commit('setLoading', false, {root: true})

    })
    .catch(err => {
      console.log(err)
      commit('setLoading', false, {root: true})
      return axiosInstance

    })

}

export const create_task = ({commit}, payload) => {
  commit('setLoading', true, {root: true})
  return axiosInstance.post('/task', payload)
    .then(response => {
      commit('setLoading', false, {root: true})
      return Promise.resolve(response)
    }).catch(err => {
      commit('setLoading', false, {root: true})
      throw err

    })
}
