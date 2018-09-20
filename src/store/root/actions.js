import {axiosInstance, setAxiosHeader} from 'plugins/axios'

export const fetchPending = ({commit}) => {
  return axiosInstance
    .get('v1/pending')
    .then(response => {
      commit('setPending', response.data)
    })
}
