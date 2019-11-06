import axios from 'axios';

export const fetchCurrentUserData = username => {
  return axios.get(`api/users/${username}`);
}