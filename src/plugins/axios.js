import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: 'http://manage.suptapee.com/api'
  baseURL: "http://stp.loc/api"
});

const setAxiosHeader = function (token) {
  axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
};

//
// axiosInstance.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   if (error.response.status === 419) {
//     localStorage.clear()
//     console.log('419 from intercep')
//     router.push('/login');
//   }
//   return Promise.reject(error)
// });

export default ({app, router, Vue}) => {
  Vue.prototype.$axiosInstance = axiosInstance;
  Vue.prototype.$setAxiosHeader = setAxiosHeader;
};

// Here we define a named export
// that we can later use inside .js files:
export {axiosInstance, setAxiosHeader};
