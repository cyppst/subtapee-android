import {axiosInstance} from 'plugins/axios'
import {QSpinnerGears} from 'quasar'

export const refresh = ({commit}
) => {
  commit('setLoading', true, {root: true})
  axiosInstance.get('/revoke')
    .then(response => {
      commit('SET_REVOKES', response.data)
      commit('setLoading', false, {root: true})

    })
    .catch(err => {
      commit('setLoading', false, {root: true})
      if (err.response.status === 419) {

        commit('auth/authError', null, {root: true})
        this.$router.push('/login')
      }
    })

}

export const create_revoke = ({commit}, payload) => {
  commit('setLoading', true, {root: true})
  return axiosInstance.post('/revoke', payload)
    .then(response => {
      commit('setLoading', false, {root: true})
      return Promise.resolve(response)
    }).catch(err => {
      commit('setLoading', false, {root: true})
      throw err

    })
}
