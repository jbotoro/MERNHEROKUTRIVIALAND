import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/signup', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

// export const fetchUsersInGame = () => {
//   return axios.get()// some logic that would fetch users currently in the session )
// }