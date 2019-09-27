import { connect } from 'react-redux';
//import Profile from './profile';
import Game from './game';
import {fetchAllQuestions} from '../../actions/questions_actions';
import { fetchUsersInGame } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let questions = state.entities.questions;
    let rnd1Qs = state.entities.questions.round1Questions;
  return {
    currentUser: state.session.user,
    questions,
    rnd1Qs,
    // users: state.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup",//id => dispatch(fetchUserData(id))
    fetchAllQuestions: ()=>dispatch(fetchAllQuestions()),
    //fetchUsersInGame: () => dispatch(fetchUsersInGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);