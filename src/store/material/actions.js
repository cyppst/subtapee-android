import {axiosInstance} from 'src/plugins/axios.js'

export const refresh = async function ({commit}) {
  commit('setLoading', true, {root: true});
  return await axiosInstance
    .get('/material')
    .then(response => {
      commit('setLoading', false, {root: true});
      commit('SET_MATERIAL', response.data);
    })
    .catch(err => {
      commit('authError', err);
      throw err
    })
};


export const acceptance = async function ({commit}, payload) {
  commit('setLoading', true, {root: true});
  return await axiosInstance
    .post('/material/pending/' + payload.id, {
      is_accept: payload.is_accept,
    }).then(response => {
      commit('setLoading', false, {root: true});
    }).catch(err => {
      commit('setLoading', false, {root: true});
      throw err
    })
};


