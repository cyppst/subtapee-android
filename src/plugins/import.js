// import something here

import {date, Notify} from 'quasar'
import storePlugin from './storePlugin'

export function isCordova() {
    return window.hasOwnProperty('cordova')
}

// leave the export, even if you don't use it
export default ({Vue}) => {
    Vue.prototype.$notify = Notify;
    Vue.prototype.$date = date;
    Vue.prototype.$isCordova = isCordova();
    Vue.use(storePlugin)
}

