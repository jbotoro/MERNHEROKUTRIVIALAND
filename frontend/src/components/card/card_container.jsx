import { connect } from 'react-redux';
//import Profile from './profile';
import Card from './card';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: "currently not fully setup"//id => dispatch(fetchUserData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);