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
        //setTimeout(this.props.changeRounds, 15000);
    }

    componentDidMount() {
        
    }

    render() {
        if (0) {
            return null
        }
        return (
            <div className="high-scores-display-container">
                <div className="high-scores-title-container">
                    <h1>The average score for the last round was: <p className="the-avg-score"></p></h1>
                    <h1>High Scores Round: {this.props.round-1}</h1>
                </div>
                <div className="high-scores-container">
                    <div className="high-score-names">
                        <p>AAA</p>
                        <p>BBB</p>
                        <p>CCC</p>
                        <p>DDD</p>
                        <p>EEE</p>
                        <p>FFF</p>
                        <p>GGG</p>
                        <p>HHH</p>
                    </div>
                    <div className="high-score-scores">
                        <p>3600</p>
                        <p>2900</p>
                        <p>2700</p>
                        <p>2600</p>
                        <p>2200</p>
                        <p>2000</p>
                        <p>1400</p>
                        <p>1000</p>
                    </div>
                </div>

                <div className="next-round-button-container">
                    <button onClick={()=>this.props.changeRounds()} className="next-round-button">Click to Start Next Round</button>
                </div>
                <div className="next-round-clock-container">
                    <Clock seconds={15}/>
                </div>
            </div>
        )
    }
}

export default HighScore;


