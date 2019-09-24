import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []
        }
    }
    
    componentDidMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserData(this.props.currentUser.id);
    }
   
    
    render() {
        if (this.state.userData.length === 0) {
          return (<div>This user has no Data</div>)
        } else {
          return (
            <div>
              <h2>Player Stats</h2>
            </div>
          );
        }
      }
}

export default Profile;
