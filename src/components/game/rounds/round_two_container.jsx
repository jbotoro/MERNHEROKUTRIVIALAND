import { connect } from 'react-redux';
//import Profile from './profile';
import RoundTwo from './round_two';

const mapStateToProps = (state) => {
  //let currentScore = state.users
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundTwo);