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
    // if (this.props.socket) {
    //   this.props.socket.on("change round", () => {
    //     console.log("doing the change")
    //     this.props.changeRounds()
    //   });
    // }
    // if (this.props.round === 4) {
    //   // console.log("YOU'RE THE ROUND2 VICTOR, ROUND THREE IS NEXT!!!!");
    // }
  }

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

    if(this.state.players.length !== this.props.players.length) this.setState({players:this.props.players});

    if (this.props.playersReady) console.log(Object.values(this.props.playersReady).length < 1);

    // let disableButton = this.props.round === 4?
    //   !Object.values(this.props.playersReady).length < 1
    //   :
    //   false;

    let button = this.props.socket ? (
      this.props.round === 4 && !Object.values(this.props.playersReady).length < 1?
      <button className="next-round-button">Waiting For Other Players</button>
      :
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
          <h1>High Scores Round: {this.props.round/2}</h1>
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
