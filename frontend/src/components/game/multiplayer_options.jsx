import React from "react";
import axios from "axios";
import "./game.css";

import { withRouter } from "react-router-dom";
// import socketIOClient from "socket.io-client";
import generateGameBoards from "../../game_logic/boards";
import { fetchAllQuestions } from "../../util/questions_util";

// import { socket } from "../../index";

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
    this.createUserModel = this.createUserModel.bind(this);
  }

  createUserModel(socketId) {
    return {
      gamesPlayed: 0,
      pointsPerGame: 0,
      questionsAnswered: 0,
      questionsCorrect: 0,
      averageRoundOne: 0,
      averageRoundTwo: 0,
      isActive: {
        isActive: true,
        roomId: null,
        isTurn: true,
        currentScore: 0,
        round1Score: 0,
        round2Score: 0,
        round3Score: 0
      },
      _id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      socketId: socketId,
      room3Player: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // compare old props with next Rpors
    // setstate if nextProps have been updated
    // ( this.props === nextProps )
  }

  joinSocket(room) {
    // let currentUser = this.props.currentUser;
    this.props.socket.emit("join room", room);
  }

  handleJoinInput(e) {
    return e =>
      this.setState({
        gameId: e.target.value
      });
  }

  handleJoinGame(e) {
    let roomId = this.state.gameId;
    // console.log("gameID", this.state);
    let user = this.createUserModel(this.props.socket.id);
    this.props.addPlayer({ gameId: roomId, user }).then(() => {
      this.props.newPlayerFetchQuestions(roomId).then(() => {
        this.joinSocket(roomId);
        this.props.history.push(`/game/${roomId}/lobby`);
      });
    });
  }

  handleCreateGame() {
    let questionsPayload = {};

    // {
    //   creator: this.props.state.session.user.id,
    //   isOnePlayerGame: true
    // };
    let newGameInput = {};
    newGameInput["creator"] = this.props.currentUser.id;
    newGameInput["isOnePlayerGame"] = true;
    newGameInput["socketId"] = this.props.socket.id;
    let user = this.createUserModel(this.props.socket.id);
    console.log("WHAT DATA TYPE OF SOCKET ID IS:   ", this.props.socket.id);
    console.log(
      "WHAT USER LOOKS LIKE IN FRONTEND UPON CREATING GAME:   ",
      user
    );
    newGameInput["user"] = user;

    this.props.generateGame(newGameInput).then(() => {
      // console.log("current game after generate");
      // console.log(this.props.currentGame);

      questionsPayload["roomId"] = this.props.currentGame.data.roomId;
      fetchAllQuestions().then(questions => {
        let parsedQuestions = generateGameBoards(questions.data);
        questionsPayload = Object.assign(questionsPayload, {
          round1Questions: parsedQuestions.round1Questions,
          round2Questions: parsedQuestions.round2Questions,
          round3Questions: parsedQuestions.round3Questions
        });
        // console.log("payload Qs", questionsPayload);
        this.props.createCurrentQuestions(questionsPayload);
      });

      this.joinSocket(this.props.currentGame.data.roomId);
      // .then(() =>
      this.props.history.push(
        `/game/${this.props.currentGame.data.roomId}/lobby`
      );
      // );
    });
  }

  render() {
    return (
      <div className="multi_options_parent">
        <div className="multi_options">
          <form className="multi_options_form" onSubmit={this.handleJoinGame}>
            <input
              className="multi_options_input"
              type="text"
              placeholder="Enter Room ID"
              onChange={this.handleJoinInput(this)}
            />
            <button
              className="multi_options_text"
              onClick={this.handleJoinGame}
            >
              Join Game
            </button>
              <p> Or </p>
            <button
              className="multi_options_text"
              onClick={this.handleCreateGame}
            >
              Create Game
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(MultiplayerOptions);
