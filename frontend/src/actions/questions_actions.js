import * as questionUtil from '../util/questions_util';
export const RECEIVE_ROUND_1_QUESTIONS = "RECEIVE_ROUND_1_QUESTIONS";

// debugger
const receiveRound1Questions = (questions) => ({
    type: RECEIVE_ROUND_1_QUESTIONS,
    questions: questions.data,
    body: ""
    
})

export const round1Questions = () => dispatch => questionUtil.round1Questions()
    .then( questions => dispatch(receiveRound1Questions(questions)));