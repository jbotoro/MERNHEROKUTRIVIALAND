import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []
        }

        this.playGame = this.playGame.bind(this);
    }
    
    componentDidMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserData(this.props.currentUser.id);
    }

    playGame(player){
      if (player === "one"){
        this.props.history.push('/game');
      }else{
        console.log("Not There Yet");
      }
    }
   
    
    render() {
        if (this.state.userData.length === 0) {
          return (
          <div>
            <div>
              <h2>Player Stats</h2>
              This user has no Data
              <button onClick={()=>this.playGame("one")}>Play 1 Player Game</button>
            </div>
          </div>
         )
          
        } else {
          return (
            <div>
              <h2>Player Stats</h2>
              <button onClick={()=>this.playGame("one")}>Play 1 Player Game</button>
            </div>
          );
        }
      }
}

export default Profile;
