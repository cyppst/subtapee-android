// import something here'
import VueCordova from 'vue-cordova'

// leave the export, even if you don't use it
export default ({
  Vue
}) => {
  Vue.use(VueCordova)
  Vue.cordova.on('deviceready', () => {
    console.log('Cordova : device is ready !')
  })
}
