import React from 'react';
import './card.scss'

class Card extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        console.log(this.props)
    }
   
    
    render() {

        let display = <h1>Card Info</h1>

        return(
            <div>
                {display}
            </div>
        )
    }
}

export default Card;