import { connect } from 'react-redux';
//import Profile from './profile';
import Scoreboard from './scoreboard';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);