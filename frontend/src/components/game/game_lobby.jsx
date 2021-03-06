import React from "react";
import "./game.css";
import { Route, Redirect, withRouter } from "react-router-dom";

// import socketIOClient from 'socket.io-client';

// import { socket } from "../../index";

class GameLobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator: false
    };
    // this.handleStartGame = this.handleStartGame.bind(this);

    this.handleStartButton = this.handleStartButton.bind(this);
    // need to transport client socket from multiplayer options somehow
    // through redux state and use it across the the sequential sockets
    this.removeDuplicatePlayers = this.removeDuplicatePlayers.bind(this);
  }

  componentDidMount() {
    // if (this.props.currentUser.id === this.props.game.data.creator) {
    //   this.setState({
    //     creator: true
    //   });
    // }
    console.log(
      "SOCKET ON FRONTEND IS:   ",
      this.props.socket.id,
      "WHAT DOES THE SOCKET ID LOOK LIKE IN FRONTEND",
      this.props.currentPlayer,
      this.props.currentPlayer.socketId
    );

    this.props.socket.on("added player", ({ room, roster }) => {
      console.log(
        "UPDATING REDUX STATE GAME FROM CLIENT SIDE SOCKET: ",
        roster,
        "socket",
        this.props.socket
      );
      // console.log(
      //   "ON THE FRONTEND APP SHOWING THIS!!-----: ",
      //   this.props.state
      // );

      // debugger;
      // FOR SOME REASON FETCHCURRENTGAME IS NOT INSTANTIATING SUPPOSODELY
      // I HAVE DEBUGGERS IN THE ACTIONS IN THE OTHER FILES BUT THEY ARE NO EXECUTING
      // FETCH CURRENT GAME IS WITH UPDATED PLAYERS ARRAY FROM INDIVIDUAL JOINING GAME
      this.props.fetchCurrentGame(room);
    });

    this.props.socket.on("remove player", ({ socketRemove, socketUpdater }) => {
      console.log(
        "REMOVE PLAYER IS WORKING ON THE SURFACE, HERE'S socketUPDATER & SOCKET REMOVE",
        socketUpdater,
        socketRemove
      );
      if (this.props.currentPlayer.socketId == socketUpdater) {
        console.log(
          "LOGIC WORKS CURRENT PLAYER REMOVING PLAYER THAT LEFT ROOM"
        );
        let players = this.props.players;
        let removePlayerIndex;
        for (let i = 0; i < players.length; i++) {
          if (players[i].socketId == socketRemove) {
            removePlayerIndex = i;
            break;
          }
        }
        let payload = {
          gameId: this.props.game.data.roomId,
          removePlayerIndex
        };
        this.props.removePlayer(payload).then(() => {
          // this.setState({ creator: true });
          this.props.socket.emit(
            "receive updated game",
            this.props.game.data.roomId
          );
        });
      }
    });

    this.props.socket.on("retrieve updated game", () => {
      this.props.fetchCurrentGame();
    });

    this.props.socket.on("game started", room => {
      // console.log("=======================", room);
      // this.removeDuplicatePlayers();
      // we do not need to use ^^^ this remove function
      // due to fix in backend that prohibits duplicated
      // players
      this.props.history.push(`/game/${this.props.game.data._id}`);
    });

    // if (this.props.game.hasStarted) {
    //   this.handleStartGame();
    // }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.game.data.players.length !== this.props.game.data.players.length) {
  //     if ()
  //   }
  // }

  handleStartGame() {
    if (this.props.game.data.players.length === 1) {
      this.props.history.push(`/game`);
    } else {
      this.props.history.push(`/game/${this.props.game.id}`);
    }
  }

  removeDuplicatePlayers() {
    let players = this.props.players;
    let playersReference = {};
    players.forEach(player => {
      playersReference[player.username] = player;
    });

    let updatedPlayers = Object.values(playersReference);
    this.props.updateRoomScore(updatedPlayers);
  }

  componentWillUnmount() {
    // this.removeDuplicatePlayers();
  }

  handleStartButton(e) {
    let game = this.props.game;
    game.data.hasStarted = true;
    this.props.startGame(game);
    // will require a socket emit call with updated state at this point

    if (this.props.game.data.players.length === 1) {
      this.props.history.push(`/game`);
    } else {
      // this.socket.to(this.props.game.data.roomId).emit("start game");
      this.props.socket.emit("start game", this.props.game.data.roomId);

      // this.props.history.push(`/game/${this.props.game.data._id}`);
    }

    // this.handleStartButton();
  }

  render() {
    // console.log(this.props.currentUser.id , this.props.game.data.creator)

    // if (!Object.keys(this.props.state.entities.game.data.players.length)) {
    //   console.log("returning null");
    //   return null;
    // }

    // this.props.socket.to(room).on('room change', )
    // if (this.props.game.hasStarted) {
    //     this.handleStartGame();
    // }

    //If there is noting in state we are going to redirect to the logged in players profile page
    if (!this.props.game) {
      return <Redirect to="/profile" />;
    }

    let display =
      this.props.game &&
      this.props.currentUser.id === this.props.game.data.creator ? (
        // || (this.props.game.data[0] &&
        // this.props.currentUser.id === this.props.game.data[0].creator)
        <div className="multi_lobby_parent">
          <div className="multi_lobby">
            <button onClick={this.handleStartButton}>Start Game</button>
          </div>

          <div>
            <ul>
              {/* list of players will go here utilizing array of players in here */}
              {/* {this.props.game.players} */}
            </ul>
          </div>
        </div>
      ) : (
        <div className="multi_lobby_parent">
          <div className="multi_lobby_players">
            <ul>
              {/* list of players will go here utilizing array of players in here */}
              {this.props.game.players}
            </ul>
            <div className="multi_not_creator">
              You are not the creator, wait for game to start
            </div>
          </div>
        </div>
      );

    return (
      <div>
        {display}
        <div className="roomnum">
          {" "}
          Lobby Number:
          <span>{this.props.game.data.roomId}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(GameLobby);
