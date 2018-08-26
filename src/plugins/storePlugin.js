import store from "src/store";

export default {
    store,
    install(Vue, options) {
        Vue.prototype.$myStore = store
    }

}