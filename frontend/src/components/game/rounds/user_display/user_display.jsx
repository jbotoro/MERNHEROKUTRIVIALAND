import React from 'react';
import '../../../css/game.css'
import Clock from '../../clock';
import CardContainer from '../../../card/card_container';

//import ScoreBoard from '.scoreboard.js'

class HighScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wagerAmount: 0,
        }
        setTimeout(this.props.changeRounds, 10000);
    }

    componentDidMount() {
        
    }

    render() {
        if (0) {
            return null
        }

        let display = (<h1>User stuff goes here</h1>)
        let question = this.props.question;
        let questionPlaceHolder = {} 
        let cardDisplay = question?
        (<CardContainer updateScore={this.props.updateScore} value={this.state.wagerAmount} question={question}/>)
        :(<div></div>)
        //:(<CardContainer updateScore={this.props.updateScore} value={this.state.wagerAmount} question={questionPlaceHolder}/>)

        return (
            <div className="rnd3-main-user-container">
                <div>
                    <Clock seconds={90}/>
                </div>

                <div>
                    <h1>Username</h1>
                </div>

                <div>
                    <h1>Total Current Points</h1>
                </div>

                <div>
                    <h1>Your Category:</h1>
                    <h6>{this.props.chosenCategory}</h6>
                </div>

                <div>
                    bet
                </div>

                <div>
                    {cardDisplay}
                </div>
            </div>
        )
    }
}

export default HighScore;


