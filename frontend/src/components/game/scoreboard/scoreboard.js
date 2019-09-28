import React from 'react';
// import './game.css'
// import RoundOne from './rounds/round_one';
//import ScoreBoard from '.scoreboard.js'

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
        }
    }
    
    componentDidMount() {
        //console.log(this.props)
        

    }
   
    
    render() {

        let display=<div><h1>Score: {this.props.currentScore}</h1></div>
    

        
        return(
            <div>

                {display}
                
            </div>
        )
    }
}

export default Scoreboard;