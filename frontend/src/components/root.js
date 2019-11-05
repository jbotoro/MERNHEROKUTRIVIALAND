import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";

// const hello = "Hello World";

const Root = ({ store, socket }) => (
  <Provider store={store}>
    <HashRouter>
      <App socket={socket} />
    </HashRouter>
  </Provider>
);

export default Root;
