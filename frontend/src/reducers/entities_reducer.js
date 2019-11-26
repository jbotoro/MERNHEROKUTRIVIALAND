import { combineReducers } from "redux";
import questionsReducer from "./questions_reducer";
import usersInGameReducer from "./users_reducer";
import gameStatsReducer from "./game_stats_reducer";
import gameReducer from "./game_reducer";
import multiplayerQuestions from "./multiplayer_questions_reducer";

const entitiesReducer = combineReducers({
  questions: questionsReducer,
  users: usersInGameReducer,
  gameStats: gameStatsReducer,
  game: gameReducer,
  multiplayerQuestions: multiplayerQuestions
});

export default entitiesReducer;
