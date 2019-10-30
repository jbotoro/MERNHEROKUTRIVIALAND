import React from "react";
import "./css/reset.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import * as GameUtil from "../util/game_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import { Route } from "react-router-dom";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import GameContainer from "./game/game_container";
import MultiplayerOptionsContainer from "./game/multiplayer_options_container";
import GameLobbyContainer from "./game/game_lobby_container";
import { persistStore } from "redux-persist";
import GameMultiplayerContainer from "./game/multiplayer_game_container";

import socketIOClient from "socket.io-client";
// import { emitSetup, onSetup } from '../util/sockets_util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sockets: {}
    };

    // this.sockets = [];
    // this.isHost = null;

    // this.createSocket = this.createSocket.bind(this);
    // this.connectSocket = this.connectSocket.bind(this);
    // this.joinSocket = this.joinSocket.bind(this);
  }

  // React.useEffect

  // joinSocket(room) {
  //   // if (this.sockets.length > 0) {
  //   //   this.sockets.forEach((socket, idx) => {
  //   //     socket.off('From Client Input');
  //   //     socket.off('From Host GameState');
  //   //     socket.disconnect();
  //   //   })
  //   //   this.sockets = [];
  //   // }

  //   //  ^^^^ IS THIS NECESSARY? ^^^^

  //   let socket;
  //   if (process.env.NODE_ENV === 'development') {
  //     socket = socketIOClient('localhost:5000', { query: { room: this.room } });
  //   } else {
  //     socket = socketIOClient(window.location, { query: { room: this.room } });
  //   }
  //   // i don't know if server is the correct thing for this input
  //   //
  //   this.sockets.push(socket);

  //   if (this.isHost) {
  //     socket.on('From Client Input', (receivedInput) => {
  //       console.log(`From Client Input`);
  //       console.log(receivedInput);
  //       this.child.SOCKET_ReceiveInputs(receivedInput);
  //       // this.setState({ gameState: receivedInput })
  //     });
  //   } else {
  //     console.log('attached to from host game state')
  //     socket.on('From Host GameState', (receivedGameState) => {
  //       this.child.SOCKET_ReceiveGameState(receivedGameState);
  //     });
  //   }

  //   if (process.env.NODE_ENV === 'development') {
  //     socket = socketIOClient('localhost:5000', { query: { room: this.room } });
  //   } else {
  //     socket = socketIOClient(window.location, { query: { room: this.room } });
  //   }

  //   this.sockets.push(socket);
  //   this.emit = emitSetup(socket);
  //   this.on = onSetup(socket);

  // }

  // createSocket() {
  //   this.isHost = true;
  //   this.joinSocket(this.props.currentUser.id)
  //   // this.forceUpdate();
  // }

  // connectSocket(name) {
  //   console.log('connecting socket');
  //   this.isHost = false;
  //   const sessionId = this.props.users[name]._id;
  //   console.log(`Session ID: ${sessionId}`);
  //   this.joinSocket(sessionId);
  //   // this.forceUpdate();
  // }

  render() {
    return (
      <div>
        <NavBarContainer />
        <Switch>
          <AuthRoute exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />

          <ProtectedRoute exact path="/profile" component={ProfileContainer} />
          <ProtectedRoute exact path="/game" component={GameContainer} />
          <ProtectedRoute
            exact
            path="/game/:gameId/lobby"
            component={GameLobbyContainer}
          />
          {/*  ^^^^ playerlobby component for users who joined another room */}
          <ProtectedRoute
            exact
            path="/game/:gameId"
            component={GameMultiplayerContainer}
          />
          <ProtectedRoute
            exact
            path="/multiplayerOptions"
            component={MultiplayerOptionsContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
