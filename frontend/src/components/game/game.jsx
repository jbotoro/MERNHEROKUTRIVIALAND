import React from 'react';
import './game.css'
import RoundOne from './rounds/round_one';
//import ScoreBoard from '.scoreboard.js'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
        }
    }
    
    componentDidMount() {
        console.log(this.props)
        this.props.fetchRnd1Questions();
        

    }
   
    
    render() {
        console.log(this.props.questions);
        let questions = {
            Entertainment_Film:[
                {
                    category: "Entertainment: Film",
                    type: "boolean",
                    difficulty: "easy",
                    question: "Han Solo&#039;s co-pilot and best friend, &quot;Chewbacca&quot;, is an Ewok.",
                    correct_answer: "False",
                    incorrect_answers: [
                      "True"
                    ]
                },
                {
                    category: "Entertainment: Film",
                    type: "multiple",
                    difficulty: "medium",
                    question: "In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
                    correct_answer: "T-800",
                    incorrect_answers: [
                    "I-950",
                    "T-888",
                    "T-1000"
                    ]
                },
                {
                    category: "Entertainment: Film",
                    type: "boolean",
                    difficulty: "easy",
                    question: "Han Solo&#039;s co-pilot and best friend, &quot;Chewbacca&quot;, is an Ewok.",
                    correct_answer: "False",
                    incorrect_answers: [
                    "True"
                    ]
                },
                {
                    category: "Entertainment: Film",
                    type: "multiple",
                    difficulty: "medium",
                    question: "In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
                    correct_answer: "T-800",
                    incorrect_answers: [
                    "I-950",
                    "T-888",
                    "T-1000"
                    ]
                },
                {
                    category: "Entertainment: Film",
                    type: "multiple",
                    difficulty: "medium",
                    question: "In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?",
                    correct_answer: "T-800",
                    incorrect_answers: [
                    "I-950",
                    "T-888",
                    "T-1000"
                    ]
                }
            ],
            
        }


        //console.log(this.questions)
        let display;
        if (this.state.round === 1){
            display = (<RoundOne questions={questions}/>);
        }else if (this.state.round === 2){

        }else if (this.state.round === 3){

        }
        

        
        return(
            <div>

                {display}
                
            </div>
        )
    }
}

export default Game;