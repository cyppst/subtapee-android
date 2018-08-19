import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.100/api'
})

const setAxiosHeader = function (token) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  console.log(axiosInstance.defaults.headers)
}

export default ({ app, router, Vue }) => {
  Vue.prototype.$axiosInstance = axiosInstance
  Vue.prototype.$setAxiosHeader = setAxiosHeader
}

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance, setAxiosHeader }
