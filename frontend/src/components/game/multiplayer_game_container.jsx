import { connect } from "react-redux";
//import Profile from './profile';
import MultiplayerGame from "./multiplayer_game";
import { fetchAllQuestions } from "../../actions/questions_actions";
import { fetchUsersInGame } from "../../actions/session_actions";
import GameActions from "../../actions/game_actions";
import GameUtil from "../../util/game_util";

const mapStateToProps = (state, ownProps) => {
  let questions = state.entities.questions;
  let rnd1Qs = state.entities.questions.round1Questions;
  let rnd2Qs = state.entities.questions.round2Questions;
  let rnd3Qs = state.entities.questions.round3Questions;
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
    rnd3Qs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup", //id => dispatch(fetchUserData(id))
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
    //fetchUsersInGame: () => dispatch(fetchUsersInGame()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiplayerGame);
