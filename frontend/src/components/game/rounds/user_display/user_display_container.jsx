import { connect } from 'react-redux';
//import Profile from './profile';
import UserDisplay from './user_display';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    // users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);