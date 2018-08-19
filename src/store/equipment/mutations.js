export const SET_EQUIPMENT = (state, equipments) => {
  state.onhand = equipments.onhand
  state.pending= equipments.pending
}
