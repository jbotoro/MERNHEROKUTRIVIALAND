import React from 'react';
import './game.css';
import RoundOne from './rounds/round_one';
import RoundTwo from './rounds/round_two';
import RoundThree from './rounds/round_three';
import ScoreBoardContainer from './scoreboard/scoreboard_container'
import HighScores from './high_scores';
import Clock from './clock';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round:3,
            currentUser: {
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                round1Score: 0,
                round2Score: 0, 
                round3Score: 0,
                currentScore: 0,
                inGame: true,
                round2Strikes: 0
            }
        }

        this.updateScore = this.updateScore.bind(this);
        this.changeRounds = this.changeRounds.bind(this);
        this.fetchCurrentRnd2Score = this.fetchCurrentRnd2Score.bind(this);
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

    changeRounds(round = null) {
        console.log('changing rounds')
        if (this.state.round === 1) {
            this.setState({
                currentUser: {round1Score: this.state.currentUser.currentScore},
                round: (this.state.round + 1)
            })
        } else if (this.state.round === 2) {
            this.setState({
                round: (this.state.round + 1)
            })
        } else if (this.state.round === 3) {
            this.setState({
                currentUser: {round2Score: (this.state.currentUser.currentScore - this.state.currentUser.round1Score)},
                round: (this.state.round + 1)
            })
        } else if (this.state.round === 4) {
            this.setState({
                round: (this.state.round + 1)
            })
        } else if (this.state.round === 5) {
            this.setState({
                currentUser: {round3Score: (this.state.currentUser.currentScore - this.state.currentUser.round1Score - this.state.currentUser.round2Score) },
                round: (this.state.round + 1)
            })
        } 
        console.log(this.state.round)
    }

    fetchCurrentRnd2Score() {
        let score = (this.state.currentUser.currentScore - this.state.currentUser.round1Score);
        return score;
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
        } else if (this.state.round === 3){//Real Round TWO
            questions = this.props.rnd2Qs;
            display = (<RoundTwo updateScore={this.updateScore} 
                questions={questions} changeRounds={this.changeRounds} 
                currentUser={this.state.currentUser}
                fetchCurrentRnd2Score={this.fetchCurrentRnd2Score}
                />);
        } else if (this.state.round === 4) {
            // high score board for proceed
        } else if (this.state.round === 5) {
            questions = this.props.rnd3Qs;
            display = (<RoundThree updateScore={this.updateScore} questions={questions} changeRounds={this.changeRounds} />);
        } else if (this.state.round === 10) {
            // should be a game over board
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


