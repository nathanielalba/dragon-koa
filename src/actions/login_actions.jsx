import axios from 'axios';

import { START_LOGIN, LOGGED_IN } from './types.jsx';
import { API_URL } from '../lib/variables.jsx';

export const startLogin = () => {
  return {
    type: REQUEST_GAME_INFO
  }
}

export const loggedIn = (data) => {
  return {
    type: RECEIVE_GAME_INFO,
    game: data
  }
}

export function logUserIn(user) {
  return function(dispatch) {
    dispatch(startLogin());
    return axios.post(API_URL + `/login`)
                .then((res) => {
                  console.log(res.data);
                  // dispatch(receiveGameInfo(res.data));
                });
  }
}
