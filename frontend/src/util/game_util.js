import axios from "axios";

import socketIOClient from "socket.io-client";

export const generateGame = newGame => {
  return axios.post("/api/games/create", newGame);
};

export const addPlayer = payload => {
  // console.log("API UTIL CALL");
  // console.log(gameId);
  return axios.patch(`/api/games/${payload.gameId}/addPlayer`, {
    user: payload.user
  }); // backend gets player id
  // automatically
  // resolve if issue
};

export const removePlayer = payload => {
  return axios.patch(`/api/games/${payload.gameId}/removePlayer`, {
    removePlayerIndex: payload.removePlayerIndex
  });
};

export const startGame = gameId => {
  return axios.patch(`/api/games/${gameId}/startGame`);
};

export const updateScore = gameId => {
  return axios.patch(`/api/games/${gameId}/updateScore/`);
};

// payload

export const updateGameScore = gameId => {
  //   socket.emit('update score', ());

  return axios.patch(`/api/games/${gameId}/updateScore/`);
};

export const endGame = gameId => {
  return axios.delete(`/api/games/${gameId}/endGame`);
};

export const fetchGame = gameId => {
  return axios.get(`/api/games/getGame/${gameId}`);
};
