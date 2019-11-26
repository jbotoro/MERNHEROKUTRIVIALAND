import { connect } from 'react-redux';
//import Profile from './profile';
import Card2 from './card2';

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

export default connect(mapStateToProps, mapDispatchToProps)(Card2);
