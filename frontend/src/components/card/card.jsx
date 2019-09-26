import React from 'react';
import './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timesAllowed: 0,
            flipped: false,
        }
    }
    
    componentDidMount() {
        console.log(this.props)
    }

    flipCard(){
        console.log("in flip function")
        this.setState({
            flipped:!this.state.flipped
        })
    }
   
    
    render() {
        let value = this.props.value;

        let question = this.props.question;
        let answers = this.props.question.incorrectAnswers;

        //answers.push()

        let flippedToggle = this.state.flipped === true? "card is-flipped":"card";

        let questionAnswerDisplay = this.props.question.questionType === "boolean"?
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
                <ul>
                    {answers}
                </ul>
            </div>
        )

        let display = (
                <div className="scene" onClick={()=>this.flipCard()}>

                    <div className={flippedToggle}>

                        <div className="card-face card-face-front ">
                            <h1>{value}</h1>
                        </div>

                        <div className="card-face card-face-back">
                            {questionAnswerDisplay}
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
