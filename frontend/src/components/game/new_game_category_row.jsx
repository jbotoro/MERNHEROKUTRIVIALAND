import React from 'react';
import './game.css'
import '../card/card.css'
import CardContainer from '../card/card_container';

class GameCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allAnswered: false,
            currentRound: this.props.round,
            round2Questions: {},
        }
        // this.round2StateSetup();
        this.round1Display = this.round1Display.bind(this);
        this.round2Display = this.round2Display.bind(this);

    }

    
    shuffle(array) {          
        array.sort(() => Math.random() - 0.5);
    }
    
    componentDidMount() {
        console.log(this.props)
        this.round2StateSetup();
    }
    
    round2StateSetup() {
        let catName = this.props.category;
        let easy = this.props.questions["easy"];
        this.shuffle(easy);
        let medium = this.props.questions["medium"];
        this.shuffle(medium);
        let hard = this.props.questions["hard"];
        this.shuffle(hard);
        this.setState({
            round2Questions: {
                easyQuestions: easy,
                mediumQuestions: medium,
                hardQuestions: hard
            }
        })
    }
    round1Display() {
        var value = 0;

        let display = this.props.questions.map(question => {
            value += 100;
            return <CardContainer updateScore={this.props.updateScore} value={value} question={question} />
        });

        let categoryName = this.props.category;
        display.unshift(<div className="category-container">{categoryName}</div>)
        return display;
    }
   

    round2Display() {
        let easyQuestion = this.state.round2Questions.easyQuestions.pop();
        let mediumQuestion = this.state.round2Questions.mediumQuestions.pop();
        let hardQuestion = this.state.round2Questions.hardQuestions.pop();

        let display = [<CardContainer question={easyQuestion} />, <CardContainer question={mediumQuestion} />, <CardContainer question={hardQuestion}/>];
        return display;
    }
    
    render() {
        // var value = 0;

        // let display = this.props.questions.map(question => {
        // value += 100;
        // return <CardContainer updateScore={this.props.updateScore} value={value} question={question}/>
        // });

        // let categoryName = this.props.category;
        // display.unshift(<div className="category-container">{categoryName}</div>)
        let display;
        switch (this.state.round) {
            case 1:
                display = this.round1Display();
                break;
            case 3:
                console.log("in roiund to switch")

                display = this.round2Display();
                break;

            default:
                break;
        }
        console.log(display)
        return(
            <div>

                <ul className="category-ul">
                    {display}
                </ul>
                
            </div>
        )
    }
}

export default GameCategoryRow;

