import {
    RECEIVE_SOCKET,
    REMOVE_SOCKET
} from '../actions/socket_action';

export default function(state = {}, action) {
    Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_SOCKET:
            return action.socket;
        case REMOVE_SOCKET:
            newState = Object.assign( {},  state);
            delete newState[action.socket]
            return newState;
            // can an object be deleted completely from the state slice
            // like this
        default:
            return state;
    }
}