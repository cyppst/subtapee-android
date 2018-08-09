export default{
	SHOW_LOADER( { commit}, message){
		commit( 'SHOW_LOADER', {
			message
		})
	},
	HIDE_LOADER( { commit}){
		commit( 'HIDE_LOADER')
	}
}