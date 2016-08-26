import * as redux from 'redux';
import thunk from 'redux-thunk';

import { gamesReducer } from '../reducers/games_reducer.jsx';

export const config = (initialState = {}) => {
  const reducer = redux.combineReducers({
    games: gamesReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  return store;
};
