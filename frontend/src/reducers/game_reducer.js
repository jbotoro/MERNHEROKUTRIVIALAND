import {
  CREATE_NEW_GAME,
  ADD_PLAYER_TO_ROOM,
  REMOVE_PLAYER_FROM_ROOM,
  START_GAME,
  UPDATE_ROOM_SCORE,
  END_GAME,
  RECIEVE_CURRENT_GAME,
  UPDATE_GAME_STATE
} from "../actions/game_actions";

// import { socket } from "../index.js";

export default function(state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case CREATE_NEW_GAME:
      return action.game;
    case ADD_PLAYER_TO_ROOM:
      console.log(
        "IN REDUCER FOR USER JOINING GAME, HERE's POJO: ",
        action.game
      );
      return action.game;
    case REMOVE_PLAYER_FROM_ROOM:
      return action.game;
    case START_GAME:
      return action.game;

    case RECIEVE_CURRENT_GAME:
      // debugger;
      return action.game;

    case UPDATE_GAME_STATE:
      return action.game;

    case UPDATE_ROOM_SCORE:
      let newPlayerArray = action.players;
      newState = Object.assign(state, {});
      newState.data.players = newPlayerArray;
      return newState;

      return action.game;
    case END_GAME:
      newState = Object.assign({}, state);
      delete newState[action.gameId];
      return newState;

    default:
      return state;
  }
}
