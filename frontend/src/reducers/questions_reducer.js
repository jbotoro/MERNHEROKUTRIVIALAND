import {
    RECEIVE_ROUND_1_QUESTIONS
} from '../actions/questions_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUND_1_QUESTIONS:
            
            return action.questions;
        default:
            return state;
    }
}