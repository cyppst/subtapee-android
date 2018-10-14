export const setLoading = (state, status) => {
  state.isLoading = status
}

export const setPending = (state, payload) => {
  state.pending = payload

}

export const setAnnounce = (state, payload) => {
  state.announce = payload

}

export const SET_CIRCUIT = (state, payload) => {
  state.circuit = payload


}
