import axios from 'axios';

const API_URL = 'http://api.lvh.me:8000';

export function fetchAPIData(url) {
  const res = axios.get(`${API_URL}/${url}`).then((data) => {
    console.log(data.data);
    return data.data;
  });
}
