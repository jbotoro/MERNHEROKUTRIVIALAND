import React from "react";
// import '../game.css'
import GameCategoryRow from "../game_category_row";
import Clock from "../clock";

class RoundOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };

    setTimeout(this.props.changeRounds, 11000);
    // setTimeout(this.props.changeRounds, 60000);
  }

  componentDidMount() {
    //console.log(this.props)
    // this.props.getQestions();
  }

  render() {
    let questionsObject = this.props.questions;
    //let categoryName = Object.keys(questionsObject)
    //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>

    let display = Object.keys(questionsObject).map(catName => (
      <GameCategoryRow
        updateScore={this.props.updateScore}
        category={catName}
        key={catName}
        round={1}
        questions={questionsObject[catName]}
      />
    ));
    // console.log(display)

    //console.log("category: "+categoryName)
    return (
      <div>
        <div className="round-1-title-clock">
          <h1>Round One</h1>
          <Clock seconds={120} />
        </div>
        <div className="game-board-rnd1">{display}</div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.updateScore(0);
  }
}

export default RoundOne;
