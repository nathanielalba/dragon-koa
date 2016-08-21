import * as redux from 'redux';
import thunk from 'redux-thunk';

export var config = (initialState = {}) => {
  var reducer = redux.combineReducers({});

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  return store;
};
