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
  DELETE_ROUND2_ROOMS,
  UPDATE_RND2_GAME_STATE,
  ADD_TO_ROUND3_ROOM
} from "../actions/game_actions";
import { bindActionCreators } from "redux";

// import { socket } from "../index.js";

export default function(state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case CREATE_NEW_GAME:
      return action.game;
    case ADD_PLAYER_TO_ROOM:
      // let players = action.game.data.players;
      // let playersHash = {};
      // // to reference individuals already in array
      // // and remove them
      // for (let i = players.length - 1; i >= 0; i--) {
      //   if (playersHash[players[i].username]) {
      //     players.splice(i, 1);
      //   } else {
      //     playersHash[players[i].username] = players[i];
      //   }
      // }
      // // newState = Object.assign(state, {});
      // // newState.data.players = players;
      // let game = action.game;
      // game.data.players = players;

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

    case DELETE_ROUND2_ROOMS:
      newState = Object.assign(state, {});
      // console.log("DELETE ROUND 2 ROOM IN REDUX STATE: ", action);
      delete newState.data.round2Rooms[action.room];
      return newState;

    case UPDATE_RND2_GAME_STATE:
      newState = Object.assign(state, {});
      newState.data.round2Rooms[action.data.round2Room] = action.data.players;
      return newState;

    case ADD_TO_ROUND3_ROOM:
      newState = Object.assign(state, {});
      if (!newState.data.round3Room) newState.data.round3Room = {};
      let currentPlayer = newState.data.players[action.idx];
      newState.data.round3Room[currentPlayer.username] = currentPlayer;
      // console.log("ROUND 3 REDUCER", newState);
      return newState;

    case END_GAME:
      newState = Object.assign({}, state);
      delete newState[action.gameId];
      return newState;

    default:
      return state;
  }
}
