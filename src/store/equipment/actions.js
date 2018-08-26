import {axiosInstance} from 'plugins/axios.js'

export const refresh = ({commit}) => {
    commit('setLoading', true, {root: true});
    return axiosInstance
        .get('/equipment')
        .then(response => {
            commit('setLoading', false, {root: true});
            commit('SET_EQUIPMENT', response.data);
            console.log('pending : ');
            console.log(response.data.pending)
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
            this.store.equipment.$dispatch('refresh');
            commit('setLoading', false, {root: true})
        })
        .catch(err => {
            commit('setLoading', false, {root: true});
            throw err
        })
};
export const acceptance = ({commit}, payload) => {
    console.log('pl' + payload);
    commit('setLoading', true, {root: true});
    return axiosInstance
        .post('/equipment/pending/' + payload.id, {
            isAccepted: payload.isAccepted,
        })
        .then(response => {
            commit('setLoading', false, {root: true});
            this.store.equipment.$dispatch('refresh')
        })
        .catch(err => {
            commit('setLoading', false, {root: true});
            console.log(err)
        })
};

export const fetchTarget = ({commit}) => {
    commit('setLoading', false, {root: true});
    return axiosInstance
        .get('/transfer/target')
        .then(response => {
            commit('setLoading', false, {root: true});
            console.log('arr: ');
            commit('SET_TARGET', response.data)

        })
        .catch(err => {
            commit('setLoading', false, {root: true});
            throw err
        })
};

