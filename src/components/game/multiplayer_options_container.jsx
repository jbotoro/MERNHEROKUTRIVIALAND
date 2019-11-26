import { connect } from "react-redux";
import * as GameUtil from "../../actions/game_actions";
import { emitSetup, onSetup } from "../../util/socket_util";
import { fetchCurrentUserData } from "../../actions/users_actions";
import MultiplayerOptions from "./multiplayer_options";
import { receiveSocket, removeSocket } from "../../actions/socket_action";
import { receiveAllQuestions } from "../../actions/questions_actions";
import { fetchAllQuestions } from "../../util/questions_util";
// import { fetchAllQuestions } from "../../actions/questions_actions";

const msp = state => {
  // let currentUser = state.session.user;
  let currentGame = state.entities.game;
  let currentUser = state.session.user;
  let socket = state.entities.socket;
  return {
    state: state,
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

    // socket actions to pass around socket, pass on to logout button as well so
    // that when logout, socket can erase
    receiveSocket: socket => dispatch(receiveSocket(socket)),
    removeSocket: socket => dispatch(removeSocket(socket))
    // fetchAllQuestions: () => dispatch(fetchAllQuestions())

    // store update with questions if wanting to
  };
};

export default connect(
  msp,
  mdp
)(MultiplayerOptions);
