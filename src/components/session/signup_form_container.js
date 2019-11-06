import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
// import { fetchGameStats } from '../../actions/game_stats_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  // let gameStats = state.entities.stats;
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
    // gameStats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
    // fetchGameStats: () => dispatch(fetchGameStats())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);