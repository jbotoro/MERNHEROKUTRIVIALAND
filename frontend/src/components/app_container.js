import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';

const msp = (state, ownProps) => {

    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        // users: 
    }

}