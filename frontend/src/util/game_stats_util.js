import axios from 'axios';

export const fetchGameData = () => {
  return axios.get(`api/gameStats/show`);
}