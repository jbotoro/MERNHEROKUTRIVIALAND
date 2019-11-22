import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// const hello = "Hello World";

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <HashRouter>
      <App />
      {/* socket={socket} */}
    </HashRouter>
    {/* </PersistGate> */}
  </Provider>
);

export default Root;
