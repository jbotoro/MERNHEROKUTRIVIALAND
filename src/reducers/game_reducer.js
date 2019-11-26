import {
  CREATE_NEW_GAME,
  ADD_PLAYER_TO_ROOM,
  REMOVE_PLAYER_FROM_ROOM,
  START_GAME,
  UPDATE_ROOM_SCORE,
  END_GAME,
  UPDATE_GAME_STATE
} from "../actions/game_actions";

export default function(state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case CREATE_NEW_GAME:
      //   console.log("I created a new game in REDUCER!");
      return action.game;
    case ADD_PLAYER_TO_ROOM:
      return action.game;
    case REMOVE_PLAYER_FROM_ROOM:
      return action.game;
    case START_GAME:
      return action.game;

    case UPDATE_GAME_STATE:
      return action.game;

    case UPDATE_ROOM_SCORE:
      return action.game;
    case END_GAME:
      newState = Object.assign({}, state);
      delete newState[action.gameId];
      return newState;

    default:
      return state;
  }
}
