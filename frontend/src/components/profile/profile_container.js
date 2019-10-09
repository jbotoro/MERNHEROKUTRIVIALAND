import { connect } from 'react-redux';

import Profile from './profile';
import { fetchCurrentUserData } from '../../actions/users_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserData: username => dispatch(fetchCurrentUserData(username)),
    fetchUserData: ()=> console.log("currently not fully setup")//id => dispatch(fetchUserData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
