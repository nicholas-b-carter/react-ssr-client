import { FETCH_EMPLOYEES} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload.data
  }

  return state
}
