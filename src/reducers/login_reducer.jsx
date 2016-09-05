import { START_LOGIN, LOGGED_IN } from '../actions/types.jsx';

const defaultState = {
  isLoggedIn: false,
  isLoading: false,
  user: {}
}

export const loginReducer = ( state = defaultState, action) => {
  switch(action.type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true,
      }
    case LOGGED_IN:
      return {
        ...state,
        isLoading: false,
        user: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}
