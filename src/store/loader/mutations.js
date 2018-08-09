export const state = {
	show: false,
	message: ''
}

export const mutations = {
	[ 'SHOW_LOADER']( state, action){
		state.SHOW = true
		state.MESSAGE = action.message
	},
	[ 'hide_loader']( state){
		state.SHOW = false
		state.MESSAGE = ''
	}
}
