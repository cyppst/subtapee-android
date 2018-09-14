import {axiosInstance, setAxiosHeader} from 'plugins/axios'

export const login = ({commit}, form) => {
    return axiosInstance
        .post('auth/login', form)
        .then(response => {
            commit('authLogin', {
                token: response.data.token,
                user: response.data.user,

            });
            setLocalStorageAttributes(response.data);
            setAxiosHeader(response.data.token)
        })
        .catch(err => {
            commit('authError', err)
        })
};

export const register = ({commit}, data) => {
    return axiosInstance
        .post('register', data)
        .then(response => {
        })
        .catch(error => {
            console.error('register error: ', error)
        })
};

export const logout = ({commit}, data) => {
    return axiosInstance
        .post('logout')
        .then(response => {
            commit('authLogout');
            setLocalStorageAttributes()
        })
        .catch(err => {
            console.error('logout errors: ', err)
        })
};

const setLocalStorageAttributes = function (data = null) {
    if (data) {
        window.localStorage['TOKEN'] = data.token;
        window.localStorage['USER_ID'] = data.user.id;
        window.localStorage['USER_NAME'] = data.user.username;
        window.localStorage['FULL_NAME'] = data.user.firstname + ' ' + data.user.lastname
    } else {
        window.localStorage.removeItem('TOKEN');
        window.localStorage.removeItem('USER_ID');
        window.localStorage.removeItem('USER_NAME');
        window.localStorage.removeItem('FULL_NAME')
    }
};
