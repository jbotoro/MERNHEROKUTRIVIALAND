import React from 'react';
import './game.css'
import RoundOne from './rounds/round_one';
import ScoreBoardContainer from './scoreboard/scoreboard_container';
import Clock from './clock';
//import ScoreBoard from '.scoreboard.js'

class HighScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        setTimeout(this.props.changeRounds, 10000);
    }

    componentDidMount() {
        
    }

    render() {
        if (0) {
            return null
        }

        return (
            <div>
                <h1>High Scores</h1>
                <Clock seconds={20}/>
            </div>
        )
    }
}

export default HighScore;


