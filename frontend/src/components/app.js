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

// import { emitSetup, onSetup } from '../util/sockets_util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.sockets = [];
    // this.isHost = null;

    // this.createSocket = this.createSocket.bind(this);
    // this.connectSocket = this.connectSocket.bind(this);
    // this.joinSocket = this.joinSocket.bind(this);
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <Switch>
          <AuthRoute exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />

          {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}

          <ProtectedRoute
            exact
            path="/profile"
            component={() => <ProfileContainer socket={this.props.socket} />}
          />

          <ProtectedRoute exact path="/game" component={GameContainer} />

          {/* <ProtectedRoute
            exact
            path="/game/:gameId/lobby"
            component={GameLobbyContainer}
          /> */}

          <ProtectedRoute
            exact
            path="/game/:gameId/lobby"
            component={() => <GameLobbyContainer socket={this.props.socket} />}
          />

          {/*  ^^^^ playerlobby component for users who joined another room */}
          {/* <ProtectedRoute
            exact
            path="/game/:gameId"
            component={GameMultiplayerContainer}
          /> */}

          <ProtectedRoute
            exact
            path="/game/:gameId"
            component={() => (
              <GameMultiplayerContainer socket={this.props.socket} />
            )}
          />

          {/* <ProtectedRoute
            exact
            path="/multiplayerOptions"
            component={MultiplayerOptionsContainer}
          /> */}

          <ProtectedRoute
            exact
            path="/multiplayerOptions"
            component={() => (
              <MultiplayerOptionsContainer socket={this.props.socket} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
