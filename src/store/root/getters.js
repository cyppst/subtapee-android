export const isLoading = state => {
  return state.isLoading
};

export const hasPending = state => {
  return {
    'equipment': {
      alert: state.pending.equipment > 0,
      count: state.pending.equipment
    },
    'material': {
      alert: state.pending.material > 0,
      count: state.pending.material
    },
  }
};


export const getAnnounceById = (state) => (id) => {
  return state.items.filter((announce) => {
    return announce.id === id
  })

};
export const circuitById = (state) => (id) => {
  return state.circuit.find(circuit => circuit.id === id)

};


export const footerPanel = state => {
  return state.footerPanel
};
