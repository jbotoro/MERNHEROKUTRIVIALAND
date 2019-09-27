import React from 'react';
// import '../game.css'
import GameCategoryRow from '../game_category_row'

class RoundOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
        }
    }
    
    componentDidMount() {
        //console.log(this.props)
        // this.props.getQestions();
        
    }
   
//{{Donuts:["Jelly","Boston Creme","Glazed","Chocolate","Peanut Butter"]}

    updateScore() {
        
    }
    
    

    render() {
        let questionsObject = this.props.questions;
        //let categoryName = Object.keys(questionsObject)
        //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>

        let display = Object.keys(questionsObject).map(catName => (<GameCategoryRow category={catName} key={catName} round={1} questions={questionsObject[catName]}/>))

        
        //console.log("category: "+categoryName)
        return(
            <div>
                <div>
                    <h1>Round One</h1>
                </div>
                <div className="game-board-rnd1">
                    {display}
                </div>
                
            </div>
        )
    }
}

export default RoundOne;