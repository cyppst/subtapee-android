import {axiosInstance, setAxiosHeader} from 'plugins/axios'

export const fetchPending = ({commit}) => {
  return axiosInstance
    .get('pending')
    .then(response => {
      commit('setPending', response.data)
    }).catch(err => {
      commit('setLoading', false, {root: true})
      if (err.response.status === 419) {

        commit('auth/authError', null, {root: true})
        router.push('/login')
      }
    })
}


export const fetchAnnounce = ({commit}) => {
  return axiosInstance
    .get('announce')
    .then(response => {
      commit('setAnnounce', response.data)
    }).catch(err => {
      commit('setLoading', false, {root: true})
      if (err.response.status === 419) {

        commit('auth/authError', null, {root: true})
        this.$router.push('/login')
      }
    })
}
