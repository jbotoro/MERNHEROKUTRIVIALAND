import React from 'react';
import './game.scss'
import CardContainer from '../card/card_container';

class Game extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        console.log(this.props)
    }
   
    
    render() {

        let display = <h1>Game Info</h1>

        return(
            <div>
                {display}
                <CardContainer />
            </div>
        )
    }
}

export default Game;