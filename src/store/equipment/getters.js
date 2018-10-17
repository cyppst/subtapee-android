export const onhand = state => {
    return state.onhand
};

export const pending = state => {
    return state.pending
};


export const target = state => {
    return state.pending
};

export const getPendingById = (state, getters) => (id) => {
    return state.pending.find(pending => pending.id === id)
};



export const getOnHandById = state => (id) => {
  return state.onhand.find(equipment => equipment.id === id)
};
