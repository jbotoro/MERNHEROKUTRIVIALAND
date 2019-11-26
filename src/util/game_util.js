import axios from "axios";

import socketIOClient from "socket.io-client";

export const generateGame = newGame => {
  return axios.post("/api/games/create", newGame);
};

export const addPlayer = gameId => {
  console.log("API UTIL CALL");
  console.log(gameId);
  return axios.patch(`/api/games/${gameId}/addPlayer`); // backend gets player id
  // automatically
  // resolve if issue
};

export const removePlayer = gameId => {
  return axios.patch(`/api/games/${gameId}/removePlayer`);
};

export const startGame = gameId => {
  return axios.patch(`/api/games/${gameId}/startGame`);
};

// export const updateScore = (gameId) => {
//     return axios.patch(`/api/games/${gameId}/updateScore/`);
// }

export const updateScore = gameId => {
  //   socket.emit('update score', ());

  return axios.patch(`/api/games/${gameId}/updateScore/`);
};

export const endGame = gameId => {
  return axios.delete(`/api/games/${gameId}/endGame`);
};
