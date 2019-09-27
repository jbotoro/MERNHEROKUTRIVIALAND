import React from 'react';
import './game.css'
import RoundOne from './rounds/round_one';
import ScoreBoardContainer from './scoreboard/scoreboard_container'
//import ScoreBoard from '.scoreboard.js'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                round1Score: 0,
                round2Score: 0, 
                round3Score: 0,
                currentScore: 0,
                inGame: true
            }
        }
    }
    
    componentDidMount() {
        //console.log(this.props)
        this.props.fetchAllQuestions();
        this.props.fetchUsersInGame();
    }
   
    updateScore(points){
        this.state.currentUser.currentScore += points;
        if (this.state.currentUser.currentScore < 0){
            this.state.currentUser.currentScore = 0;
        }
    }
    
    render() {
        if (!this.props.rnd1Qs){
            return null
        }


        console.log(this.props.questions.round1Questions);


        let questions;
        console.log(this.new_questions)
        let display;
        if (this.state.round === 1){
            questions = this.props.rnd1Qs;
            display = (<RoundOne questions={questions}/>);
        }else if (this.state.round === 2){

        }else if (this.state.round === 3){

        }
        

        
        return(
            <div>
                <ScoreBoardContainer />
                {display}
                
            </div>
        )
    }
}

export default Game;

/*
        let questions = {
            Film:[
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
            New_Film:[
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
            Film3:[
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
            New_Film4:[
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
<<<<<<< HEAD

        //console.log(this.questions)
        let display;
        if (this.state.round === 1){
            display = (<RoundOne questions={questions} 
                currentUser={this.state.currentUser} 
                users={this.props.users}
                />);
        }else if (this.state.round === 2){

        }else if (this.state.round === 3){

        }
        

        
        return(
            <div>
                <ScoreBoardContainer />
                {display}
                
            </div>
        )
    }
}

export default Game;
=======
*/
>>>>>>> d7e1fdeb73d8448bc12ee72aba6d4aaf509526ec
