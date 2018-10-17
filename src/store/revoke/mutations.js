export const SET_REVOKES = (state, revokes) => {
  state.revokes = revokes.data
};

export const ADD_REVOKE = (state, revoke) => {
  state.revokes.push(revoke)
};




