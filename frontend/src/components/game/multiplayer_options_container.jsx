import { connect } from "react-redux";
import * as GameUtil from "../../actions/game_actions";
import { emitSetup, onSetup } from "../../util/socket_util";
import { fetchCurrentUserData } from "../../actions/users_actions";
import MultiplayerOptions from "./multiplayer_options";
import { receiveSocket, removeSocket } from "../../actions/socket_action";
import { receiveAllQuestions } from "../../actions/questions_actions";
import { fetchAllQuestions } from "../../util/questions_util";
import {
  createCurrentQuestions,
  newPlayerFetchQuestions,
  deleteAllGameQuestions
} from "../../actions/current_game_questions_actions";
// import { fetchAllQuestions } from "../../actions/questions_actions";

const msp = (state, ownProps) => {
  // let currentUser = state.session.user;
  let currentGame = state.entities.game;
  let currentUser = state.session.user;
  const socket = ownProps.socket;
  return {
    currentGame,
    currentUser,
    socket
    // currentUser: currentUser,
  };
};
// get rid of the util's and replace with actions
const mdp = dispatch => {
  return {
    generateGame: newGame => dispatch(GameUtil.generateGame(newGame)),
    addPlayer: gameId => dispatch(GameUtil.addPlayer(gameId)),
    removePlayer: gameId => dispatch(GameUtil.removePlayer(gameId)),
    startGame: gameId => dispatch(GameUtil.startGame(gameId)),
    updateScore: gameId => dispatch(GameUtil.updateScore(gameId)),
    endGame: gameId => dispatch(GameUtil.endGame(gameId)),
    emitSetup: socket => dispatch(emitSetup(socket)),
    onSetup: socket => dispatch(onSetup(socket)),

    //mutliplayer questions
    createCurrentQuestions: questions =>
      dispatch(createCurrentQuestions(questions)),
    newPlayerFetchQuestions: questions =>
      dispatch(newPlayerFetchQuestions(questions)),
    deleteAllGameQuestions: () => dispatch(deleteAllGameQuestions())

    // store update with questions if wanting to
  };
};

export default connect(
  msp,
  mdp
)(MultiplayerOptions);
