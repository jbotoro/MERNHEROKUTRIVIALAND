import axios from 'axios';

export const fetchAllQuestions = () => {
    return axios.get('/api/questions/getQuestions');
}