import {
  CREATE_NEW_GAME,
  ADD_PLAYER_TO_ROOM,
  REMOVE_PLAYER_FROM_ROOM,
  START_GAME,
  UPDATE_ROOM_SCORE,
  END_GAME,
  RECIEVE_CURRENT_GAME,
  UPDATE_GAME_STATE,
  CREATE_ROUND2_ROOMS,
  UPDATE_RND2_GAME_STATE
} from "../actions/game_actions";
import { bindActionCreators } from "../../../../../../Library/Caches/typescript/3.6/node_modules/redux";

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

    case CREATE_ROUND2_ROOMS:
      newState = Object.assign(state, {});
      newState.data.round2Rooms = action.rooms;
      return newState;

    case UPDATE_RND2_GAME_STATE:
      newState = Object.assign(state, {});
      newState.data.round2Rooms[action.data.round2Room] = action.data.players;
      return newState;

    case END_GAME:
      newState = Object.assign({}, state);
      delete newState[action.gameId];
      return newState;

    default:
      return state;
  }
}
