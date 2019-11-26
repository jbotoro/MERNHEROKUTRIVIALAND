import React from "react";
import axios from "axios";

import { withRouter } from "react-router-dom";
import socketIOClient from "socket.io-client";
import generateGameBoards from "../../game_logic/boards";
import { fetchAllQuestions } from "../../util/questions_util";

class MultiplayerOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: ""
    };

    // this.props.socket
    //   .to(this.props.socket.room)
    //   .on("room change", ({ room, currentGameState }) => {
    //     console.log("changing rooms", room);
    //   });

    this.handleJoinInput = this.handleJoinInput.bind(this);
    this.handleJoinGame = this.handleJoinGame.bind(this);
    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.joinSocket = this.joinSocket.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // compare old props with next Rpors
    // setstate if nextProps have been updated
    // ( this.props === nextProps )
  }

  joinSocket(room) {
    // this.room;

    let socket;
    // if (process.env.NODE_ENV === "development") {
    socket = socketIOClient("localhost:5000");
    // } else {
    //   socket = socketIOClient(window.location);
    // }
    let currentUser = this.props.currentUser;
    // socket.room = room;
    // create action that stores current socket in state and
    // invoke here

    socket.on("connect", () => {
      console.log("working");
      socket.emit("testing", { testing: true });
    });

    // this.props.receiveSocket(socket);
    // let currentGameState = this.props.currentGame;
    // socket.emit("join room", { room, currentGameState });
  }

  handleJoinInput(e) {
    return e =>
      this.setState({
        gameId: e.target.value
      });
  }

  handleJoinGame(e) {
    let gameId = this.state.gameId;
    console.log("gameID", this.state);
    this.props.addPlayer(gameId).then(() => {
      //   this.joinSocket(gameId);
      this.props.history.push(`/game/${gameId}/lobby`);
    });
  }

  handleCreateGame() {
    let newGameInput = {};

    // {
    //   creator: this.props.state.session.user.id,
    //   isOnePlayerGame: true
    // };

    fetchAllQuestions().then(questions => {
      newGameInput["creator"] = this.props.state.session.user.id;
      newGameInput["isOnePlayerGame"] = true;
      //   let parsedQuestions = generateGameBoards(questions.data);
      //   newGameInput["questions"] = parsedQuestions;
      //   console.log("Parsed Qs", parsedQuestions);

      // console.log("game before generate");
      // console.log(this.props.currentGame);

      this.props.generateGame(newGameInput).then(() => {
        // console.log("current game after generate");
        // console.log(this.props.currentGame);

        this.joinSocket(this.props.currentGame.data.roomId);
        // .then(() =>
        // this.props.history.push(
        //   `/game/${this.props.currentGame.data.roomId}/lobby`
        // );
        // );
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleJoinGame}>
            <input
              type="text"
              placeholder="Enter Room ID"
              onChange={this.handleJoinInput(this)}
            />
            <button onClick={this.handleJoinGame}>Join Game</button>
          </form>
        </div>

        <button onClick={this.handleCreateGame}>Create Game</button>
      </div>
    );
  }
}

export default withRouter(MultiplayerOptions);
