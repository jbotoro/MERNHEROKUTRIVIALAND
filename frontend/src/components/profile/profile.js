import React from 'react';

import UserStatsDisplay from '../game/stats/user_stats_display';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        }

        this.playGame = this.playGame.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCurrentUserData(this.props.currentUser.username);

        // this.props.fetchUserData(this.props.currentUser._id);
    }

    playGame(player){
      if (player === "one"){
        this.props.history.push('/game');
      } else { 
        console.log("Not There Yet");
      }
    }
    
    render() {  
      
        if (this.state.userData === {}) {
          return (
          <div className="profile-content">
            <div className="profile-stats">
              <h2>Player Stats</h2>
              <p>This user has no data</p>
            </div>
            <div>
              <button className="play-button"
                onClick={() => this.playGame("one")}>Play 1 Player Game</button>
              {/* <button>Start New MultiPlayer Game</button> */}
            </div>
          </div>
         )  
        } else {
          let id = this.props.currentUser._id
          let user = this.state.userData[id];
          return (
            <div className="profile-content">
              <div className="profile-stats">
                <h2>Player Stats</h2>
                <UserStatsDisplay user={user} />
              </div>
              <div>
                <button className="play-button" 
                  onClick={() => this.playGame("one")}>Play 1 Player Game</button>
                {/* <button>Start New MultiPlayer Game</button> */}
              </div>
            </div>
          );
        }
      }
}

export default Profile;
