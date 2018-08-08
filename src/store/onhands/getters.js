export default {
  ONHAND_MATERIAL = (state) => {
    return state.TASKS.filter( task => task.completed)

  },
  ONHAND_EQUIPMENT = (state) => {
    return state.TASKS.filter( onhand => task.completed)

  }
}
