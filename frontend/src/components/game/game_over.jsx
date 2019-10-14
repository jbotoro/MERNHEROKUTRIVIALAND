import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Clock from './clock';

class GameOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.startNewGame = this.startNewGame.bind(this);
        // setTimeout( startNewGame(), 5000);
    }

    startNewGame() {
        setTimeout(this.props.history.push(`/profile`), 5000);
    }

    render() {

        let display = this.props.currentScore > 0 ? (
        <div>
            <h3>Congratulations! You Win!</h3>
        </div>
        ) 
        : 
        (
            <div>
                <h1>Sorry You Lose</h1>
            </div>
        );

        return (
            <div>
                {display}
                <div className="next-round-clock-container">
                    {this.startNewGame()}
                    <h2>Starting new Game in: </h2>
                    <Clock seconds={5} />
                </div>
            </div>
        )

    }
}

export default withRouter(GameOver);