import {
    RECEIVE_USERS_IN_GAME
} from '../actions/session_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS_IN_GAME:
            let users = {};
            Object.values(action.users).forEach(user => {
                user['round1Score'] = 0;
                user['round2Score'] = 0;
                user['round3Score'] = 0;
                user['inGame'] = true;
                users[user.id] = user;
            });
            return users;

        default:    
            return state;
    }
}

