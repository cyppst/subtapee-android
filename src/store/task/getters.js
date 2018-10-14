export const tasks = state => {
  return state.tasks
}



export const getTaskById = state => (id) => {
  return state.tasks.find(task => task.id === id)
}
