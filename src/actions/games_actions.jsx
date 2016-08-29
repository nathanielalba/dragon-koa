import axios from 'axios';

import { REQUEST_GAME_INFO, RECEIVE_GAME_INFO } from './types.jsx';
import { API_URL } from '../lib/variables.jsx';

export const requestGameInfo = () => {
  return {
    type: REQUEST_GAME_INFO
  }
}

export const receiveGameInfo = (data) => {
  return {
    type: RECEIVE_GAME_INFO,
    game: data
  }
}

export function fetchGameData(slug) {
  return function(dispatch) {
    dispatch(requestGameInfo());
    return axios.get(API_URL + `/games/${slug}`)
                .then((res) => {
                  // console.log(res.data);
                  dispatch(receiveGameInfo(res.data));
                });
  }
}
