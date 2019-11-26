import * as questionUtil from '../util/questions_util';
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";

// debugger
const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions: questions.data,
    body: ""
    
})

export const fetchAllQuestions = () => dispatch => questionUtil.fetchAllQuestions()
    .then( questions => dispatch(receiveAllQuestions(questions)));