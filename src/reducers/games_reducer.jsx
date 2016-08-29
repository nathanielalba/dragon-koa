import { REQUEST_GAMES_LIST, RECEIVE_GAMES_LIST, REQUEST_GAME_INFO, RECEIVE_GAME_INFO } from '../actions/types.jsx';

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

export const gameReducer = ( state = { game: {}, isLoading: false }, action) => {
  switch(action.type) {
    case REQUEST_GAME_INFO:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_GAME_INFO:
      return {
        ...state,
        isLoading: false,
        game: { ...action.game }
      }
    default:
      return state;
  }
}
