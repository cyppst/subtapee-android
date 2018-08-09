export const state = {
	ISFETCHING: false,
	ERROR: null
}

export const mutations = {
	[ 'REQUEST_API']( state){
		state.isfetching = true
		state.ERROR = null
	},
	[ 'REQUEST_API_SUCCESS']( state){
		state.isfetching = false
		state.ERROR = null
	},
	[ 'REQUEST_API_ERROR']( state, action){
		state.isfetching = false
		state.ERROR = action.error
	}
}