import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { autoRehydrate } from 'redux-persist';
// import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';



const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)  // removed logger
  )
);

// configureStore.subscribe( () => saveToLocalStorage(configureStore.getState()))

export default configureStore;
