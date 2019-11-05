import { connect } from "react-redux";

import Profile from "./profile";
import { fetchCurrentUserData } from "../../actions/users_actions";
// console.log(this.props);
const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users;
  const socket = ownProps.socket;
  console.log("Profile container: ", socket);
  // console.log(users);
  return {
    currentUser: state.session.user,
    users,
    socket
    // props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserData: username => dispatch(fetchCurrentUserData(username)),
    fetchUserData: () => console.log("currently not fully setup") //id => dispatch(fetchUserData(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
