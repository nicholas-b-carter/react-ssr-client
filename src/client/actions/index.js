import {patchXhr, setToken} from 'jwt-csrf/client'

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const fetchEmployees = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/employees')

    dispatch({
      type: FETCH_EMPLOYEES,
      payload: res
    })
  }
  catch(err) {
    console.error("Error fetching employees")
  }
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/current_user')

    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res
    })
  }
  catch(err) {
    console.error("Error fetching current user")
  }
}

export const FETCH_ADMINS = 'FETCH_ADMINS'
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins')

  jwtCsrf.setToken(res.payload.data.csrfToken)
  jwtCsrf.patchXhr()

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  })
}

export const AUTH_USER = 'AUTH_USER'
export const signupUser = ({email, password}) => async (dispatch, getState, api) => {
  try {
    const res = await api.post('/signup', {email, password})
    dispatch({ type: AUTH_USER,
               payload: res})
  }
  catch(err) {
    dispatch(authError(`${err}`))
  }
}

export const signinUser = ({email, password}) => async (dispatch, getState, api) => {
  try {
    console.log("SIGNIGN IN: ", email, password)
    // Submit email/password to server.
    const res = await api.post('/signin', { email, password })
    // If request is good:
    // -Update state indicating user authenticated
    dispatch({ type: AUTH_USER,
               payload: res})
  }
  catch(err) {
    // If request is bad:
    // - Show an error to the user.
    dispatch(authError('Bad Login Info'))
  }
}

export const UNAUTH_USER = 'UNAUTH_USER'
export function signoutUser() {
  return { type: UNAUTH_USER }
}

export const AUTH_ERROR = 'AUTH_ERROR'
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const FETCH_MESSAGE = 'FETCH_MESSAGE'
export const fetchMessage = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/')
    dispatch({type: FETCH_MESSAGE, payload: res.data.message})
  }
  catch(err) {
    console.error(err)
  }
}
