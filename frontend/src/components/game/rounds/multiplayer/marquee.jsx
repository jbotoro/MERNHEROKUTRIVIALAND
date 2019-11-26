import React from "react";
import "../../game.css";

class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="marquee-container">
        <marquee behavior="scroll" direction="right" scrollamount="10">
          <div className="marquee-scores">
            {this.props.players.map(player => (
              <h1>
                {player.username}: {player.isActive.currentScore} pts
              </h1>
            ))}
          </div>
        </marquee>
      </div>
    );
  }
}

export default Marquee;
