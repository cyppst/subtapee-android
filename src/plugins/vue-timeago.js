// import something here
import VueTimeago from 'vue-timeago'

// leave the export, even if you don't use it
export default ({app, router, Vue}) => {
    Vue.use(VueTimeago, {
        name: 'Timeago', // Component name, `Timeago` by default
        locale: 'th', // Default locale
        // We use `date-fns` under the hood
        // So you can use all locales from it
        locales: {
            'th': require('date-fns/locale/th'),
        }
    })
}
