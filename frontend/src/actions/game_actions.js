import * as GameUtil from "../util/game_util";
import { create } from "domain";
import Game from "../components/game/game";
import { socket } from "../index";

export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const ADD_PLAYER_TO_ROOM = "ADD_PLAYER_TO_ROOM";
export const REMOVE_PLAYER_FROM_ROOM = "REMOVE_PLAYER_FROM_ROOM";
export const START_GAME = "START_GAME";
export const UPDATE_GAME_STATE = "UPDATE_GAME_STATE";
export const UPDATE_ROOM_SCORE = "UPDATE_ROOM_SCORE"; // when one user updates score
export const RECIEVE_CURRENT_GAME = "RECIEVE_CURRENT_GAME";
//round 2 actions
export const CREATE_ROUND2_ROOMS = "CREATE_ROUND2_ROOMS";
export const DELETE_ROUND2_ROOMS = "DELETE_ROUND2_ROOMS";
export const UPDATE_RND2_GAME_STATE = "UPDATE_RND2_GAME_STATE";
//round 3 actions
export const ADD_TO_ROUND3_ROOM = "ADD_TO_ROUND3_ROOM";
export const FETCH_ROUND3_ROOM = "FETCH_ROUND3_ROOM";
// export const UPDATE_RND3_GAME_STATE = "UPDATE_RND3_GAME_STATE";
// all users will recieve update score
export const END_GAME = "END_GAME";

export const addToRnd3Room = idx => ({
  type: ADD_TO_ROUND3_ROOM,
  idx
});

export const fetchRound3Room = () => ({
  type: FETCH_ROUND3_ROOM,
});

export const updateRnd2GameStat = data => ({
  type: UPDATE_RND2_GAME_STATE,
  data
});

export const deleteRound2Rooms = room => ({
  type: DELETE_ROUND2_ROOMS,
  room
});

export const createRound2Rooms = rooms => ({
  type: CREATE_ROUND2_ROOMS,
  rooms
});

export const createNewGame = game => ({
  type: CREATE_NEW_GAME,
  game
});

export const addPlayerToRoom = game => ({
  type: ADD_PLAYER_TO_ROOM,
  game
});

export const removePlayerFromGame = game => ({
  type: REMOVE_PLAYER_FROM_ROOM,
  game
});

export const updateGameState = game => ({
  type: UPDATE_GAME_STATE,
  game
});

export const startGame = game => ({
  type: START_GAME,
  game
});

export const updateRoomScore = players => ({
  type: UPDATE_ROOM_SCORE,
  players
});

export const endGame = gameId => ({
  type: END_GAME,
  gameId
});

export const fetchGame = game => ({
  type: RECIEVE_CURRENT_GAME,
  game
});

export const fetchCurrentGame = roomId => dispatch =>
  GameUtil.fetchGame(roomId).then(game => {
    // debugger;
    dispatch(fetchGame(game));
  });

export const generateGame = newGame => dispatch =>
  GameUtil.generateGame(newGame).then(game => dispatch(createNewGame(game)));

export const addPlayer = payload => dispatch =>
  GameUtil.addPlayer(payload).then(game => {
    dispatch(addPlayerToRoom(game));
  });

export const removePlayer = gameId => dispatch =>
  GameUtil.removePlayer(gameId).then(game =>
    dispatch(removePlayerFromGame(game))
  );

export const startNewGame = gameId => dispatch =>
  GameUtil.startGame(gameId).then(game => dispatch(startGame(game)));

// update score on the backend needs modification, it is set up in a way
// that only deals with live backend modifications, need to fix it so
// we just send game payload as the req.body and it just updates the
// pojo that way

export const updateScore = gameId => dispatch =>
  GameUtil.updateScore(gameId).then(game => dispatch(updateRoomScore(game)));

export const endCurrentGame = gameId => dispatch =>
  GameUtil.endGame(gameId).then(gameId => dispatch(endGame(gameId)));

// socket.on("added player", room => {
//   console.log("UPDATING REDUX STATE GAME FROM CLIENT SIDE SOCKET: ", room);
//   debugger;
//   fetchCurrentGame(room);
// });
