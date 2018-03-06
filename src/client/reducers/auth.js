import {
  FETCH_CURRENT_USER,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions'

export default function(state = {authenticated: false}, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      if(action.payload.data) {
        return { ...state,
          csrfToken: action.payload.data.csrfToken,
          user: action.payload.data.user,
          authenticated: true,
          error: ''}
      }
      return { ...state, user: {}, authenticated: false }
    case AUTH_USER:
      console.log("PAYLOAD: ", action.payload.data)
      return { ...state,
              user: action.payload.data.user,
              csrfToken: action.payload.data.csrfToken,
              authenticated: true,
              error: '' }
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '' }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case FETCH_MESSAGE:
      return {...state, message: action.payload }
  }
  return state
}
