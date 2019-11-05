import axios from "axios";
// payload contains roomId for game as well
export const createQuestions = questionsPayload => {
  return axios.post("/api/currentGameQuestions/create", questionsPayload);
};

export const fetchCurrentGameQuestions = roomId => {
  return axios.get("/api/currentGameQuestions/getCurrentQuestions", roomId);
};

export const deleteCurrentGameQuestions = roomId => {
  return axios.delete(
    "/api/currentGameQuestions/deleteCurrentGameQuestions",
    roomId
  );
};
