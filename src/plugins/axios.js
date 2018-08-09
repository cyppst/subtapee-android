import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.100'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance


}
