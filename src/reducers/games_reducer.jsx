import { REQUEST_GAMES_LIST, RECEIVE_GAMES_LIST } from '../actions/types';

const initialState = {
    isLoading: false,
    games: [],
    error: false
};

export const gamesReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_GAMES_LIST:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case RECEIVE_GAMES_LIST:
      return {
        ...state,
        games: action.games,
        isLoading: false
      }
    default:
      return state
  }
}
