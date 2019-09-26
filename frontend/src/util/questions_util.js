import axios from 'axios';

export const round1Questions = () => {
    return axios.post('/api/users/roundOne');
}