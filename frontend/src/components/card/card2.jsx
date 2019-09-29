import React from 'react';
import './card.css'

class Card2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // users: Object.values(this.props.allUsers),
            // if users.length >= 4, implement algorithm below
                         // n = Math.floor( users.length * 0.5), 
            timesAllowed: 1,
            flipped: false,
            question: this.props.question,
            // questions: this.props.questions

        }
    }

    componentDidMount() {
        // console.log(this.props)
    }


    flipCard() {
        console.log("in flip function")
        this.setState({
            flipped: !this.state.flipped
        })
    }

    answerQuestion(points, answer, correctAnswer, difficulty) {
        console.log(points);
        console.log(answer);
        console.log(correctAnswer);
        let newQuestion = this.props.updateRound2Question(difficulty);
        this.setState({
            timesAllowed: this.state.times - 1,
        })
        if (answer === correctAnswer) {
            this.props.updateScore(points);
            // let newQuestion = this.state.questions.pop();
            this.setState({
                timesAllowed: 1,
                flipped: false,
                question: newQuestion
                // question: newQuestion,
            })
            // console.log(this.state.questions)
        } else {
            this.props.updateScore(-points);
            // let newQuestion = this.state.questions.pop();
            this.setState({
                timesAllowed: 1,
                flipped: false,
                question: newQuestion
            })
            // console.log(this.state.questions)
        }
    }


    render() {
        let value = this.props.value;
        let difficulty = this.state.question.difficulty;
        let question = this.state.question;
        let correctAnswer = this.state.question.correctAnswer;
        //let answers = this.props.question.incorrect_answers;
        let answers = [...this.state.question.incorrectAnswers]
        let randomIndex = Math.floor(Math.random() * (answers.length + 1))
        answers.splice((randomIndex), 0, correctAnswer);

        let flippedToggle;
        let flippedToggle2;
        if (this.state.flipped) {
            flippedToggle = "card is-flipped";
            flippedToggle2 = "card-top-container more-flip"
        } else {
            flippedToggle = "card"
            flippedToggle2 = "card-top-container"
        }

        let answersArray = answers.map(answer => (<div onClick={() => this.answerQuestion(value, answer, correctAnswer, difficulty)} className="answer-container">{answer}</div>))

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
            (
                <div className="scene" onClick={() => this.flipCard()}>

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
            (
                <div className="scene">

                    <div>

                        <div className="card-face card-face-front ">
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

export default Card2;
