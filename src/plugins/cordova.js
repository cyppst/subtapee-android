// import something here'
import VueCordova from 'vue-cordova'
import axios from 'axios'
// leave the export, even if you don't use it
export default ({Vue}) => {
  Vue.use(VueCordova);
  Vue.cordova.on('deviceready', () => {
    console.log('Cordova : device is ready !');
    screen.orientation.lock('portrait');
    //
    // window.plugins.sim.getSimInfo(successCallback, errorCallback);
    //
    // function successCallback(result) {
    //   axios.post('http://postb.in/STFKekPa', {
    //     body: {result}
    //   }).then(function (response) {
    //     console.log(response);
    //   })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }

    function errorCallback(err) {
      console.log('error')
    }
  })
}



