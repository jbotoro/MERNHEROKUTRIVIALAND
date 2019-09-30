import React from 'react';
import '../../css/game.css';
// import './game.css'
// import RoundOne from './rounds/round_one';
//import ScoreBoard from '.scoreboard.js'

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    componentDidMount() {
        console.log(this.props)
        

    }
   
    
    render() {
        console.log(this.props)
        let display=<div className="score-board-container"><h1>Score: </h1><p className="score"> {this.props.currentScore}</p></div>
    

        
        return(
            <div>

                {display}
                
            </div>
        )
    }
}

export default Scoreboard;