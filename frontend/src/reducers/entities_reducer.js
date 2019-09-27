import { combineReducers } from 'redux';
import questionsReducer from './questions_reducer';
import usersInGameReducer from './users_reducer';

const entitiesReducer = combineReducers({
    questions: questionsReducer,
    users: usersInGameReducer
})

export default entitiesReducer;