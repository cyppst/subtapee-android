export const isLoading = state => {
  return state.isLoading
}

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
}
