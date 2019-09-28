import React from 'react';
import './game.css'
import RoundOne from './rounds/round_one';
import RoundTwo from './rounds/round_two';
import ScoreBoardContainer from './scoreboard/scoreboard_container'
import HighScores from './high_scores';
import Clock from './clock';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round:1,
            currentUser: {
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                round1Score: 0,
                round2Score: 0, 
                round3Score: 0,
                currentScore: 0,
                inGame: true
            }
        }

        this.updateScore = this.updateScore.bind(this);
        this.changeRounds = this.changeRounds.bind(this);
    }
    
    componentDidMount() {
        //console.log(this.props)
        this.props.fetchAllQuestions();
        // this.props.fetchUsersInGame();
    }
   
    updateScore(points){
        
        if (this.state.currentUser.currentScore + points < 0) {
            this.setState({
                currentUser: { currentScore: 0 }
            });
        } else {
            this.setState({
                currentUser: { currentScore: (this.state.currentUser.currentScore + points) }
            });
        }

    }

    changeRounds() {
        console.log('changing rounds')
        this.setState({
            round: (this.state.round + 1)
        })
        console.log(this.state.round)
    }
    
    render() {
        if (!this.props.rnd1Qs){
            return null
        }




        console.log(this.state.currentUser.currentScore);


        let questions;
        console.log(this.new_questions)
        let display;
        if (this.state.round === 1){
            questions = this.props.rnd1Qs;
            display = (<RoundOne updateScore={this.updateScore} questions={questions} changeRounds={this.changeRounds}/>);
        } else if (this.state.round === 2){
            display = (<HighScores changeRounds={this.changeRounds}/>);
        } else if (this.state.round === 3){
            display = (<RoundTwo updateScore={this.updateScore} questions={questions} changeRounds={this.changeRounds} />);
        } else if (this.state.round === 10) {
        }
        

        
        return(
            <div>
                <ScoreBoardContainer currentScore={this.state.currentUser.currentScore}/>
                {display}
                
            </div>
        )
    }
}

export default Game;


