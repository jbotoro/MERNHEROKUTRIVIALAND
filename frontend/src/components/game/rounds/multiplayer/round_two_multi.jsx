import "../../game.css";
// import '../game.css'
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import GameCategoryRow from "../../game_category_row";
import Clock from "../../clock";

class RoundTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      strikes: 0, // if number becomes three,
      rightAnswers: 0,
      timerSeconds: 15,
      currentPlayers: this.props.currentPlayers
    };
    //React hook for Clock
    this.clock = React.createRef();

    // setTimeout(this.props.changeRounds, 6000); // shouldn't have
    this.wrongAnswersDisplay = this.wrongAnswersDisplay.bind(this);
    this.rightAnswer = this.rightAnswer.bind(this);
    this.numWrongRightCheck = this.numWrongRightCheck.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    console.log(this.props.currentPlayers);
    // this.props.getQestions();
  }

  componentWillUnmount() {
    clearTimeout(this.questionTimer);
  }

  wrongChoice() {
    let players = this.state.currentPlayers.map(plyr => plyr);
    let thisPlayer = players[this.props.myIndex];
    thisPlayer.strikes++;
    players[this.props.myIndex] = thisPlayer;
    this.setState({
      strikes: this.state.strikes + 1,
      rightAnswers: this.state.rightAnswers + 1
    });
    this.props.socket.emit("updateRnd2", {
      round2Room: this.props.round2RoomNum,
      players,
      room: this.props.socketRoom
    });
    if (this.state.strikes === 3) {
      // logic to use this.changeRounds(3)
      // which that logic will stop the game for the user
      // back in game
    }

    this.wrongAnswersDisplay();
  }

  rightAnswer(answer) {
    let players = this.state.currentPlayers.map(plyr => plyr);
    let thisPlayer = players[this.props.myIndex];

    //calling clock child component reset clock function to display new countdown
    if (this.state.rightAnswers < 3) {
      this.clock.current.resetClock();
    }
    clearTimeout(this.questionTimer);
    this.setState({
      timerSeconds: 15
    });

    if (answer) {
      thisPlayer.rightAnswers++;

      this.setState({
        rightAnswers: this.state.rightAnswers + 1
      });
    } else {
      thisPlayer.strikes++;

      this.setState({
        strikes: this.state.strikes + 1
      });
    }

    players[this.props.myIndex] = thisPlayer;

    this.props.socket.emit("updateRnd2", {
      round2Room: this.props.round2RoomNum,
      players,
      room: this.props.socketRoom
    });
  }

  numWrongRightCheck() {
    if (this.state.strikes === 3) {
      clearTimeout(this.questionTimer);
      setTimeout(() => {
        this.props.changeRounds("gameover");
      }, 1200);
    } else if (this.state.rightAnswers === 3) {
      clearTimeout(this.questionTimer);
      setTimeout(this.props.changeRounds, 1200);
    }
  }

  wrongAnswersDisplay() {
    let dispArr = [];
    let numWrong = this.state.strikes;

    for (let i = 0; i < numWrong; i++) {
      dispArr.push(<div className="wrong-answer">X</div>);
    }

    for (let j = 0; j < 3 - numWrong; j++) {
      dispArr.push(<div className="wrong-answer"></div>);
    }
    return dispArr;
  }

  rightAnswersDisplay() {
    let dispArr = [];
    let numRight = this.state.rightAnswers;

    for (let i = 0; i < numRight; i++) {
      dispArr.push(<div className="right-answer">0</div>);
    }

    for (let j = 0; j < 3 - numRight; j++) {
      dispArr.push(<div className="right-answer"></div>);
    }
    return dispArr;
  }

  setTimer() {
    if (this.state.strikes < 3 && this.state.rightAnswers < 3) {
      this.questionTimer = setTimeout(this.rightAnswer, 15000);
    }
  }

  render() {
    //EveryTime we re-render we want to check if we got three strikes or 3 rights and change roungs if necessary
    this.numWrongRightCheck();
    this.setTimer();
    // console.log(this.state.strikes);

    let questionsObject = this.props.questions;
    //let categoryName = Object.keys(questionsObject)
    //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>
    // Object.keys(questionsObject).map(catName => (<GameCategoryRow updateScore={this.props.updateScore} category={catName} key={catName} round={1} questions={questionsObject[catName]} />))

    let display = (
      <div>
        <h1>Round Two</h1>
      </div>
    );

    let new_display = <h1>Round Two</h1>;

    let rightAnswersDisplay = this.rightAnswersDisplay();
    let wrongAnswersDisplay = this.wrongAnswersDisplay();

    let questions = this.props.questions;

    let catName = Object.keys(this.props.questions)[0];
    // console.log(questions)
    // console.log('ALL QUESTIONS')
    return (
      <div className="game-board-rnd2">
        <div className="game-board-rnd2-left">
          <div className="round-two-rules">
            <h1>Round Two</h1>
            <h2>
              Rules: you have 15 seconds to answer a question or you will get
              one wrong
            </h2>
            <h2>You must get any 3 out of 5 questions right</h2>
          </div>
          <div className="cat-questions-container">
            <GameCategoryRow
              rightAnswer={this.rightAnswer}
              updateScore={this.props.updateScore}
              category={catName}
              key={catName}
              round={3}
              questions={questions[catName]}
            />
          </div>
        </div>

        <div className="game-board-rnd2-right">
          <div>
            <Clock seconds={15} ref={this.clock} />
          </div>

          <div className="rnd2-username">
            <h1>{this.state.currentUser.username}</h1>
          </div>
          <div className="right-answers">
            <h1>Right Answers</h1>
            {rightAnswersDisplay}
          </div>
          <div className="wrong-answers">
            <h1>Wrong Answers</h1>
            {wrongAnswersDisplay}
          </div>
          <div>
            <h1>Player Scores</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default RoundTwo;

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
