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
// all users will recieve update score
export const END_GAME = "END_GAME";

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

export const updateRoomScore = game => ({
  type: UPDATE_ROOM_SCORE,
  game
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
  GameUtil.fetchGame(roomId).then(game => dispatch(fetchGame(game)));

export const generateGame = newGame => dispatch =>
  GameUtil.generateGame(newGame).then(game => dispatch(createNewGame(game)));

export const addPlayer = gameId => dispatch =>
  GameUtil.addPlayer(gameId).then(game => {
    console.log("in actions:", game);
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
