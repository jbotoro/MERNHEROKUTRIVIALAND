import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from 'redux-logger';

import rootReducer from "../reducers/root_reducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk) // removed logger
  );

  return store;
};

// configureStore.subscribe( () => saveToLocalStorage(configureStore.getState()))

export default configureStore;

/*
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState = {}) => {
  let store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk) // removed logger
  );

  let persistor = persistStore(store);

  return { store, persistor };
};

// configureStore.subscribe( () => saveToLocalStorage(configureStore.getState()))

export default configureStore;
*/
