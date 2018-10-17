export const setLoading = (state, status) => {
  state.isLoading = status
};

export const setPending = (state, payload) => {
  state.pending = payload

};

export const setAnnounce = (state, payload) => {
  state.announce = payload

};

export const SET_CIRCUIT = (state, payload) => {
  state.circuit = payload


};
export const SET_ENGINEER = (state, engineers) => {
  state.engineers = engineers;

};

export const SET_FOOTER_PANEL = (state, payload) => {
  state.layout = payload
};


