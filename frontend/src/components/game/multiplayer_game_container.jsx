import { connect } from "react-redux";
//import Profile from './profile';
import MultiplayerGame from "./multiplayer_game";
import { fetchAllQuestions } from "../../actions/questions_actions";
import { fetchUsersInGame } from "../../actions/session_actions";
import * as GameActions from "../../actions/game_actions";
import GameUtil from "../../util/game_util";

const mapStateToProps = (state, ownProps) => {
  let questions = state.entities.questions;
  let rnd1Qs = state.entities.multiplayerQuestions.round1Questions;
  let rnd2Qs = state.entities.multiplayerQuestions.round2Questions;
  let rnd3Qs = state.entities.multiplayerQuestions.round3Questions;
  let game = state.entities.game;
  let socket = ownProps.socket;
  let players = game.data.players;
  let index = players.findIndex(player => {
    return player.username === state.session.user.username;
  });
  // const socket = ownProps.socket;

  // let currentGame = state.entities.game;
  // pretend currentGame and the players array is getting
  // desired effect where each player was assigned the
  // currentGameStats property with all three sub properties
  /* {
    currentScore: 0,
    round1Score: 0,
    round2Score: 0,
    round3Score: 0,
  } */
  return {
    currentUser: state.session.user,
    questions,
    rnd1Qs,
    rnd2Qs,
    rnd3Qs,
    game,
    socket,
    players,
    index
    // socket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup", //id => dispatch(fetchUserData(id))
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    updateRoomScore: players => dispatch(GameActions.updateRoomScore(players)),
    removePlayerFromGame: game =>
      dispatch(GameActions.removePlayerFromGame(game))
    //fetchUsersInGame: () => dispatch(fetchUsersInGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiplayerGame);
