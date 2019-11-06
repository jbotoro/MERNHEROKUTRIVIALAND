import {
    RECEIVE_USERS_IN_GAME
} from '../actions/session_actions';

import { 
  RECEIVE_CURRENT_USER_DATA
} from '../actions/users_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS_IN_GAME:
            let users = {};
            Object.values(action.users).forEach(user => {
                user['round1Score'] = 0;
                user['round2Score'] = 0;
                user['round3Score'] = 0;
                user['currentRound'] = 1;
                user['inGame'] = true;
                users[user._id] = user;
            });
            return users;
        case RECEIVE_CURRENT_USER_DATA:
          let user = action.user;
          let newState = Object.assign({}, state);
          newState[user._id] = user;
          return newState;
        default:    
          return state;
    }
}

