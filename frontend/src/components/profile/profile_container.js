import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: ()=> console.log("currently not fully setup")//id => dispatch(fetchUserData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
