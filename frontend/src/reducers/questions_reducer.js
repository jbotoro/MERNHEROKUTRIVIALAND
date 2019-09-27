import {
    RECEIVE_ROUND_1_QUESTIONS
} from '../actions/questions_actions';
import generateRound1Board from '../game_logic/board_1';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUND_1_QUESTIONS:
            let board_1 = generateRound1Board(action.questions)[0];
            return board_1;
        default:
            return state;
    }
}