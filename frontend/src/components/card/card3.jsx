import React from 'react';
import './card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // users: Object.values(this.props.allUsers),
            // if users.length >= 4, implement algorithm below
            timesAllowed: 1,  // n = Math.floor( users.length * 0.5), 
            flipped: true,
            answeredCorrectly: false,

        }
    }

    componentDidMount() {
        //console.log(this.props)
    }

    flipCard() {
        //console.log("in flip function")
        this.setState({
            flipped: !this.state.flipped
        })
    }

    answerQuestion(points, answer, correctAnswer) {
        // console.log(points);
        // console.log(answer);
        // console.log(correctAnswer);
        this.setState({
            timesAllowed: this.state.times - 1,
        })
        if (answer === correctAnswer) {
            this.props.updateScore(points);
            this.setState({
                timesAllowed: this.state.times - 1,
                answeredCorrectly: true
            })
        } else {
            this.props.updateScore(-points);
            this.setState({
                timesAllowed: this.state.times - 1,
                answeredCorrectly: false
            })
        }
    }




    render() {
        let value = this.props.value;

        let question = this.props.question;
        let correctAnswer = this.props.question.correctAnswer;
        //let answers = this.props.question.incorrect_answers;
        let answers = [...this.props.question.incorrectAnswers]
        let randomIndex = Math.floor(Math.random() * (answers.length + 1))
        answers.splice((randomIndex), 0, correctAnswer);

        let flippedToggle;
        let flippedToggle2;
        let sceneToggle;
        if (this.state.flipped) {
            flippedToggle = "card is-flipped";
            flippedToggle2 = "card-top-container more-flip"
            sceneToggle = "scene scene-flipped";
        } else {
            flippedToggle = "card"
            flippedToggle2 = "card-top-container"
            sceneToggle = "scene ";
        }

        let answersArray = answers.map(answer => (<div onClick={() => this.answerQuestion(value, answer, correctAnswer)} className="answer-container">{answer}</div>))

        let questionAnswerDisplay = this.props.question.questionType === "boolean" ?
            (<div className="card-question">
                <h1>{question.question}</h1>
                <ul className="answers-list">
                    {answersArray}
                </ul>
            </div>
            )
            :
            (<div className="card-question">
                <h1>{question.question}</h1>
                <ul className="answers-list">
                    {answersArray}
                </ul>
            </div>

            )

        let display = this.state.timesAllowed ?
            (                   // removed onclick below, so card just remains flipped up
                <div className={sceneToggle} > {/*  onClick={() => this.flipCard()}  */}
                    <div className={flippedToggle}>

                        <div className="card-face card-face-front ">
                            <h1>{value}</h1>
                        </div>

                        <div className="card-face new_card-face-back">
                            {questionAnswerDisplay}
                        </div>

                    </div>

                </div>
            )
            :
            (//allready answere questions
                <div className="scene">

                    <div>

                        <div className={this.state.answeredCorrectly ? "card-face card-face-front already-answered-right" : "card-face card-face-front already-answered-wrong"}>
                            <h1>{value}</h1>
                        </div>

                        <div className="card-face new_card-face-back">
                            {questionAnswerDisplay}
                        </div>

                    </div>

                </div>
            )

        return (
            <div className={flippedToggle2}>
                {display}
            </div>
        )
    }
}

export default Card;
