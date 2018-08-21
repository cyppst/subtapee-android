export const SET_EQUIPMENT = (state, equipments) => {
    state.onhand = equipments.onhand;
  state.pending= equipments.pending
};

export const SET_TARGET = (state, target) => {

    console.log(target);
  state.target = target
};
