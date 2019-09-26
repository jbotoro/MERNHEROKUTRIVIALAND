import React from 'react';
import './game.css'
import CardContainer from '../card/card_container';

class GameCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allAnswered: false
        }
    }
    
    componentDidMount() {
        console.log(this.props)
    }
   
    
    render() {
        var value = 0;

        let display = this.props.questions.map(question => {
        value += 100;
        return <li><CardContainer value={value} question={question}/></li>
        });

        let categoryName = this.props.questions[0].category;
        display.unshift(<li><div>{categoryName}</div></li>)
        return(
            <div>

                <ul>
                    {display}  
                </ul>
                
            </div>
        )
    }
}

export default GameCategoryRow;

