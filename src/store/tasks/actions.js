export function loadTasks({
  commit
}) {

  commit('REQUEST_API')
  commit('SHOW_LOADER', {
    message: 'downloading tasks...'
  })

  axios.get('http://localhost/api/tasks')
    .then(r => r.data)
  commit('REQUEST_API_SUCCESS')
    .then(tasks => {
      commit('SET_TASKS', tasks)
      console.log(tasks)

      commit('HIDE_LOADER')
        .catch(err => {
          commit('REQUEST_API_ERROR', {
            err
          })
          commit('SHOW_LOADER', {
            message: 'There was an error downloading the tasks.'
          })
        })
    })
}
// axios.get( host)
// .then( res => {
// commit( 'REQUEST_API_SUCCESS')
// 	commit( 'GET_TASKS', {
// 		payload: res.data
// 	})
// 	commit( 'hide_loader')
// })
// .catch( err => {
// 	commit( 'REQUEST_API_ERROR', { err})
// 	commit( 'SHOW_LOADER', {
// 		message: 'There was an error downloading the tasks.'
// 	})
// })
// }
