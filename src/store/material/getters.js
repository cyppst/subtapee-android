export const onhand = state => {
  return state.onhand
};

export const pending = state => {
  return state.pending
};

export const getOnHandById = state => (id) => {
  return state.onhand.find(material => material.id === id)
};
