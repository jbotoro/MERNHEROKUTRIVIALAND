import React from 'react';

class GameStatsDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.fetchGameStats();
  // }

  render() {

    // let stats = this.props.stats;
    // console.log(stats);
    // let percentageCorrect = Math.floor(stats.totalQuestionsCorrect /
    //   stats.totalQuestionsAsked);

    return (
      <div>
        <ul className="game-stats-list">
          <li>Game Stats</li>
          {/*
          <li>
            <span>Total Games Played:</span>
            <span>{stats.gamesPlayed}</span>
          </li>
          <li>
            <span>Percentage Correct:</span>
            <span>{percentageCorrect} %</span>
          </li>        
          <li>
            <span>Avg Points to Pass Rd 1: </span>
            <span>{stats.averageRoundOnePassingPoints}</span>
          </li>
          <li>
            <span>Avg Points to Pass Rd 2:  </span>
            <span>{stats.averageRoundTwoPassingPoints}</span>
          </li>
          <li>
            <span>Avg Points to Win:</span>
            <span>{stats.averageRoundThreeWinningPoints}</span>
          </li>
          */}
        </ul>
      </div>
    )
  }
}

export default GameStatsDisplay;