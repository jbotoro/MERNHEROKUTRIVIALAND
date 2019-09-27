import React from 'react';
import './game.css'
import '../card/card.css'
import CardContainer from '../card/card_container';

class GameCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allAnswered: false
        }
    }
    
    componentDidMount() {
        //console.log(this.props)
    }
   
    
    render() {
        var value = 0;

        let display = this.props.questions.map(question => {
        value += 100;
        return <CardContainer value={value} question={question}/>
        });

        let categoryName = this.props.category;
        display.unshift(<div className="category-container">{categoryName}</div>)
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

