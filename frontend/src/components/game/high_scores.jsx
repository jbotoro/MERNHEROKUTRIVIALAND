import React from "react";
import "./game.css";
import RoundOne from "./rounds/round_one";
import ScoreBoardContainer from "./scoreboard/scoreboard_container";
import Clock from "./clock";
//import ScoreBoard from '.scoreboard.js'

class HighScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    // this.hsTimer = setTimeout(this.props.changeRounds, 20000);
    this.sortHighScores = this.sortHighScores.bind(this);
  }

  componentDidMount() {
    console.log("HIGH SCORES PLAYERS:   ", this.props.players);

    this.sortHighScores();
    if (this.props.socket) {
      this.props.socket.on("change round", () => this.props.changeRounds());
    }
    if (this.props.round === 4) {
      // console.log("YOU'RE THE ROUND2 VICTOR, ROUND THREE IS NEXT!!!!");
    }
  }

    // render() {
    //     if (0) {
    //         return null
    //     }
    //     return (
    //         <div className="high-scores-display-container">
    //             <div className="high-scores-title-container">
    //                 <h1>The average score for the last round was: <p className="the-avg-score"></p></h1>
    //                 <h1>High Scores </h1>
    //                 <h1> Round: {this.props.round - 1} </h1>
                        
    //             </div>
    //             <div className="high-scores-container">
    //                 <div className="high-score-names">
    //                     <p>AAA</p>
    //                     <p>BBB</p>
    //                     <p>CCC</p>
    //                     <p>DDD</p>
    //                     <p>EEE</p>
    //                     <p>FFF</p>
    //                     <p>GGG</p>
    //                     <p>HHH</p>
    //                 </div>
    //                 <div className="high-score-scores">
    //                     <p>3600</p>
    //                     <p>2900</p>
    //                     <p>2700</p>
    //                     <p>2600</p>
    //                     <p>2200</p>
    //                     <p>2000</p>
    //                     <p>1400</p>
    //                     <p>1000</p>
    //                 </div>
    //             </div>
  componentWillUnmount() {
    clearTimeout(this.hsTimer);
  }

  sortHighScores() {
    let players = this.props.players.map(plyr => {
      return plyr;
    });
    players.sort((a, b) =>
      a.isActive.currentScore < b.isActive.currentScore ? 1 : -1
    );

    this.setState({
      players: players
    });
  }

  render() {
    if (0) {
      return null;
    }

    // console.log(this.props.players);

    // let waitingClass = this.props.round === 4? :"next-round-button "

    let button = this.props.socket ? (
      <button
        onClick={() => {
          this.props.socket.emit("tryChangeRoom", this.props.room);
          //   this.props.changeRounds();
        }}
        // className={waitingClass}
        className="next-round-button"
      >
        Click to Proceed
      </button>
    ) : (
      <button
        onClick={() => {
          //this.props.socket.emit("tryChangeRoom", this.props.room);
          this.props.changeRounds();
        }}
        className="next-round-button"
      >
        Click to Proceed
      </button>
    );

    return (
      <div className="high-scores-display-container">
        <div className="high-scores-title-container">
          <h1>
            The average score for the last round was:{" "}
            <p className="the-avg-score"></p>
          </h1>
          <h1>High Scores Round: {this.props.round - 1}</h1>
        </div>
        <div className="high-scores-container">
          <div className="high-score-names">
            {this.state.players.map(player => (
              <p>{player.username.toUpperCase()}</p>
            ))}
          </div>
          <div className="high-score-scores">
            {this.state.players.map(player => (
              <p>{player.isActive.currentScore}</p>
            ))}
          </div>
        </div>
        <div className="next-round-button-container">{button}</div>
        {/* <div className="next-round-clock-container">
                    <Clock seconds={15}/>
                </div> */}{" "}
        {/* SEEMS TO BE UNNECESSARY AT THE MOMENT */}
      </div>
    );
  }
}

export default HighScore;
