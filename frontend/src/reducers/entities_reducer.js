import { combineReducers } from 'redux';
import questionsReducer from './questions_reducer';
import usersInGameReducer from './users_reducer';
import gameStatsReducer from './game_stats_reducer';
import gameReducer from './game_reducer';
import socketReducer from './socket_reducer';

const entitiesReducer = combineReducers({
    questions: questionsReducer,
    users: usersInGameReducer,
    gameStats: gameStatsReducer,
    game: gameReducer,
    socket: socketReducer
});

export default entitiesReducer;