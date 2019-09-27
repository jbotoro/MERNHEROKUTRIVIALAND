import {
    RECEIVE_ALL_QUESTIONS
} from '../actions/questions_actions';
import generateGameBoards from '../game_logic/boards';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            let gameQuestions = generateGameBoards(action.questions);
            return gameQuestions;
        default:
            return state;
    }
}