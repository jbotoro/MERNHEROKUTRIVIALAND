import React from 'react';
// import '../game.css'
import GameCategoryRow from '../game_category_row'

class RoundOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
        }
        setTimeout(this.props.changeRounds, 5000);
    }

    componentDidMount() {
        //console.log(this.props)
        // this.props.getQestions();

    }



    //{{Donuts:["Jelly","Boston Creme","Glazed","Chocolate","Peanut Butter"]}



    render() {
        let questionsObject = this.props.questions;
        //let categoryName = Object.keys(questionsObject)
        //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>
        // Object.keys(questionsObject).map(catName => (<GameCategoryRow updateScore={this.props.updateScore} category={catName} key={catName} round={1} questions={questionsObject[catName]} />))

        let display = <div><h1>Round Two</h1></div>

        //console.log("category: "+categoryName)
        return (
            <div>
                <div>
                    <h1>Round Two</h1>
                </div>
                <div className="game-board-rnd2">
                    {display}
                </div>

            </div>
        )
    }
}

export default RoundOne;