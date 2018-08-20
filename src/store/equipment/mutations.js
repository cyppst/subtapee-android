export const SET_EQUIPMENT = (state, equipments) => {
  state.onhand = equipments.onhand
  state.pending= equipments.pending
}

export const SET_TARGET = (state, target) => {
  state.target = target
}
