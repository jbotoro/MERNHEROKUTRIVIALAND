import React from 'react';
import { withRouter } from 'react-router-dom';

import GameStatsDisplayContainer from '../game/stats/game_stats_display_container'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-page-content">
        <div className="session-form-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input className="submit-link-button" type="submit" value="Submit" />
            {this.renderErrors()}
          </form>
        </div>
        <div className="high-scores-container">
          <GameStatsDisplayContainer/>
        </div>
      </div >
    );
  }
}

export default withRouter(LoginForm);