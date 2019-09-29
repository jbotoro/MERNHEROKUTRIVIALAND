import React from 'react';
// import '../game.css'
import GameCategoryRow from '../game_category_row';
import '../../css/game.css';

class RoundOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            strikes: 0  // if number becomes three, 
        }
        setTimeout(this.props.changeRounds, 6000); // shouldn't have 
        
    }

    componentDidMount() {
        //console.log(this.props)
        // this.props.getQestions();

    }

    wrongChoice() {
        this.setState({
            strikes: (this.state.strikes + 1)
        })

        if (this.state.strikes === 3) {
            // logic to use this.changeRounds(3)
            // which that logic will stop the game for the user
            // back in game
        }
    }

    render() {

        let questionsObject = this.props.questions;
        //let categoryName = Object.keys(questionsObject)
        //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>
        // Object.keys(questionsObject).map(catName => (<GameCategoryRow updateScore={this.props.updateScore} category={catName} key={catName} round={1} questions={questionsObject[catName]} />))

        let display = <div><h1>Round Two</h1></div>

        let new_display = (
            <h1>Round Two</h1>
        );


        let questions = this.props.questions;

        let catName = Object.keys(this.props.questions)[0];
        // console.log(questions)
        // console.log('ALL QUESTIONS')
        return (
            <div className="game-board-rnd2">
                <div>
                    <h1>Round Two</h1>
                </div>
                <div>
                    <GameCategoryRow updateScore={this.props.updateScore} 
                    category={catName}
                    key={catName}
                    round={3} 
                    questions={questions[catName]} />
                </div>
                <div>
                    <h1>XXX</h1>
                </div>
                <div>
                    <h1>Player Scores</h1>
                </div>

            </div>
        )
    }
}

export default RoundOne;


/*

<div>
                    <h1>{Object.keys(this.props.questions)[0]}</h1>
                    <div>

                    </div>
                </div>
                <div>

                </div>
                <div className="game-board-rnd2">
                    {display}
                </div>



*/