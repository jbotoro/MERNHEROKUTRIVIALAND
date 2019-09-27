import {
    RECEIVE_ROUND_1_QUESTIONS
} from '../actions/questions_actions';
import generateGameBoards from '../game_logic/boards';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUND_1_QUESTIONS:
            let gameQuestions = generateGameBoards(action.questions);
            return gameQuestions;
        default:
            return state;
    }
}