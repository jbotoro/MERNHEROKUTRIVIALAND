import React from 'react';
import './card.css'

class QuestionSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
    }
    
    componentDidMount() {
        // console.log(this.props)
    }
    
    render() {
        let display = (
                <div className="card-question" onClick={()=>this.flipCard()}>

                    <h1>Lets check this out</h1>
                </div>
            )

        return(
            <div>
                {display}
            </div>
        )
    }
}

export default QuestionSide;
