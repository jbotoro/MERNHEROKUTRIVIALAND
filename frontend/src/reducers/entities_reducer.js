import { combineReducers } from 'redux';
import questionsReducer from './questions_reducer';

const entitiesReducer = combineReducers({
    questions: questionsReducer,
})

export default entitiesReducer;