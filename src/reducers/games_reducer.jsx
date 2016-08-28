import { REQUEST_GAMES_LIST, RECEIVE_GAMES_LIST } from '../actions/types.jsx';

export const gamesReducer = ( state = {games: [], isLoading: false}, action ) => {
  switch(action.type) {
    case REQUEST_GAMES_LIST:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_GAMES_LIST:
      return {
        ...state,
        isLoading: false,
        games: [...action.games]
      }
    default:
      return state;
  }
}
