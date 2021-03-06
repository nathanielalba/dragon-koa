import * as redux from 'redux';
import thunk from 'redux-thunk';

import { gameReducer, gamesReducer } from '../reducers/games_reducer.jsx';
import { loginReducer } from '../reducers/login_reducer.jsx';


export const config = (initialState = {}) => {
  const reducer = redux.combineReducers({
    game: gameReducer,
    games: gamesReducer,
    user: loginReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  return store;
};
