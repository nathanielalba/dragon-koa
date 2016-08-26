import axios from 'axios';

import { REQUEST_GAMES_LIST, RECEIVE_GAMES_LIST } from './types.js';
import API_URL from '../lib/variables';

export var requestGamesList = () => {
  return {
    type: SET_GAMES_LIST,
  }
};

export var receiveData = (data) => {
  return {
    type: RECEIVE_GAMES_LIST,
    games: data
  }
}

export function fetchData() {
  return function(dispatch) {
    dispatch(requestGamesList());
    return axios({
      url: API_URL + '/games',
      timeout: 20000,
      method: 'GET',
      responseType: 'json'
    })
      .then((res) => {
        console.log('api fetch');
        console.log(res.data);
        dispatch(receiveData(res.data))
      });
  }
}
