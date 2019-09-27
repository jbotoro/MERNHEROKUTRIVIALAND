import axios from 'axios';

export const round1Questions = () => {
    return axios.get('/api/questions/getQuestions');
}