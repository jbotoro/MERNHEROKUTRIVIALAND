import { combineReducers } from 'redux';
import questionsReducer from './questions_reducer';
import usersInGameReducer from './users_reducer';
import gameStatsReducer from './game_stats_reducer';

const entitiesReducer = combineReducers({
    questions: questionsReducer,
    users: usersInGameReducer,
    gameStats: gameStatsReducer
})

export default entitiesReducer;