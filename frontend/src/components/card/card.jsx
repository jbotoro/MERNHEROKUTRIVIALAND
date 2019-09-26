import React from 'react';
import './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timesAllowed: 0,
        }
    }
    
    componentDidMount() {
        //console.log(this.props)
    }
   
    
    render() {
        let value = this.props.value;

        let question = this.props.question;
        let answers = this.props.question.incorrectAnswers;

        let answerDisplay = this.props.question.questionType === "boolean"?
        (<div className="card-question">
            <h1>{question.question}</h1>
            <ul>
                <li><p>True</p></li>
                <li><p>False</p></li>
            </ul>  
        </div>
        )
        :
        (<div className="card-question">
            <h1>{question.question}</h1>
            <p>1982</p>
            <p>1986</p>
            <p>1981</p>
            <p>1985</p>
        </div>
        )

        let display = (
                <div className="maincontainer">

                    <div className="thecard">

                        <div className="thefront">
                            <h1>{value}</h1>
                        </div>

                        <div className="theback">
                            {answerDisplay}
                        </div>

                    </div>
                
                </div>
            )

        return(
            <div>
                {display}
            </div>
        )
    }
}

export default Card;
