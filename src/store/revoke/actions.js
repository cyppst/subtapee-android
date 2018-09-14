import {axiosInstance} from 'plugins/axios'
import {QSpinnerGears} from 'quasar'

export const refresh = ({commit}
) => {
    commit('setLoading', true, {root: true});
    axiosInstance.get('/revoke')
        .then(response => {
            console.log('revoke (store) :');
            console.log(response.data);
            commit('SET_REVOKES', response.data);
            commit('setLoading', false, {root: true})

        })
        .catch(err => {
            console.log(err);
            commit('setLoading', false, {root: true});
            return axiosInstance

        })

};

export const create_revoke = ({commit}, revoke) => {
    commit('setLoading', true, {root: true});
    return axiosInstance.post('/revoke', {revoke})
        .then(response => {
            commit('setLoading', false, {root: true});
            commit('ADD_REVOKE', response.data());
            return Promise.resolve(response)
        }).catch(err => {
            commit('setLoading', false, {root: true});
            return Promise.reject(err)

        })
};
