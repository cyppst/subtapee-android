import {axiosInstance} from 'src/plugins/axios.js'

export const refresh = async function ({commit}) {
    commit('setLoading', true, {root: true});
    return await axiosInstance
        .get('/equipment')
        .then(response => {
            commit('setLoading', false, {root: true});
            commit('SET_EQUIPMENT', response.data);
        })
        .catch(err => {
            commit('authError', err);
            throw err
        })
};

export const transfer = ({commit}, payload) => {
    commit('setLoading', true, {root: true});
    return axiosInstance
        .post('/equipment/transfer', payload)
        .then((response) => {
            commit('setLoading', false, {root: true})
            resolve()
        })
        .catch(err => {
            commit('setLoading', false, {root: true});
            throw err
        })
};
export const acceptance = async function ({commit}, payload) {
    commit('setLoading', true, {root: true});
    return await axiosInstance
        .post('/equipment/pending/' + payload.id, {
            is_accept: payload.is_accept,
        }).then(response => {
            commit('setLoading', false, {root: true});
        }).catch(err => {
            commit('setLoading', false, {root: true});
            throw err
        })
};

export const fetchTarget = ({commit}) => {
    commit('setLoading', false, {root: true});
    return axiosInstance
        .get('/transfer/target')
        .then(response => {
            commit('setLoading', false, {root: true});
        }).catch(err => {
            commit('setLoading', false, {root: true});
            throw err
        })
};

