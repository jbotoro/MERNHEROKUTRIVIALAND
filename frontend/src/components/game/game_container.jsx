import { connect } from 'react-redux';
//import Profile from './profile';
import Game from './game';
import {round1Questions} from '../../actions/questions_actions'

const mapStateToProps = (state) => {
    let questions = state.entities.questions;
  return {
    currentUser: state.session.user,
    questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup",//id => dispatch(fetchUserData(id))
    fetchRnd1Questions: ()=>dispatch(round1Questions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);