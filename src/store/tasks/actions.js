/*
export const someAction = (state) => {}
 */

 export const GET_TASKS = (state) => {
    commit( 'request_api')
	commit( 'show_loader', {
		message: 'downloading tasks...'
	})

	axios.get( host)
	.then( res => {
		commit( 'REQUEST_API_SUCCESS')
		commit( 'GET_TASKS', {
			payload: res.data
		})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'REQUEST_API_ERROR', { err})
		commit( 'SHOW_LOADER', {
			message: 'There was an error downloading the tasks.'
		})
	})
}
