export const authRequest = state => {
  state.status = 'loading'
}

export const authLogin = (state, payload) => {
  state.status = 'success'
  state.token = payload.token
  state.userId = payload.user.id
  state.fullName = payload.user.firstname + ' ' + payload.user.lastname
  state.userName = payload.user.username
}

export const authError = state => {
  state.status = 'error'
  state.userId = ''
  state.token = ''
  state.userName = ''
}

export const authLogout = state => {
  state.status = 'logout'
  state.token = ''
  state.userId = ''
  state.userName = ''
}
