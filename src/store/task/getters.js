export const tasks = state => {
  return state.tasks
}
export const detailById = (state, getters) => (id) => {
  return state.tasks.find(task => task.id === id)

}
