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
<<<<<<< HEAD
    // users: state.entities.users
=======
    rnd1Qs,
    // users: state.
>>>>>>> d7e1fdeb73d8448bc12ee72aba6d4aaf509526ec
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup",//id => dispatch(fetchUserData(id))
    fetchAllQuestions: ()=>dispatch(fetchAllQuestions()),
    fetchUsersInGame: () => dispatch(fetchUsersInGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);