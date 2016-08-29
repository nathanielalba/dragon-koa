import axios from 'axios';

import { REQUEST_GAMES_LIST, RECEIVE_GAMES_LIST } from './types.jsx';
import API_URL from '../lib/variables.jsx';

export var requestGamesList = () => {
  return {
    type: REQUEST_GAMES_LIST,
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
    // return axios({
    //   url: 'http://api.lvh.me:8000/games',
    //   timeout: 20000,
    //   method: 'GET',
    //   responseType: 'json'
    // })
    return axios.get('http://api.lvh.me:8000/games')
      .then((res) => {
        dispatch(receiveData(res.data))
      });
  }
}
