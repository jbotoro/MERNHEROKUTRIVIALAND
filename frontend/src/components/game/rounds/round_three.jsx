import React from 'react';
import '../../css/game.css'
import GameCategoryRow from '../game_category_row';
import Clock from '../clock';
import UserDisplay  from './user_display/user_display';

class RoundOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            currentUser: this.props.currentUser,
            currentUserTurn: true,
            currentUsersCategory: "",
            currentUsersWager: 0,
            allCategoriesNamesArr: [],
            showingCategoriesArr: []
        }
        // setTimeout(this.props.changeRounds, 6000);
        

        this.getAllCategories = this.getAllCategories.bind(this);
        this.removeCategory = this.removeCategory.bind(this);

    }
    
    componentDidMount() {
        //console.log(this.props)
        // this.props.getQestions();
        this.getAllCategories()  
    }

    removeCategory = cat => {
        console.log(this.state.allCategoriesNamesArr.length)
        if (this.state.allCategoriesNamesArr.length<1){
            this.getAllCategories();
        }else{
            this.setState(state => {
    
                let showingCategoriesArr = state.showingCategoriesArr.filter((item) => cat !== item);
                let allCategoriesNamesArr = state.allCategoriesNamesArr;
                showingCategoriesArr = showingCategoriesArr.concat(allCategoriesNamesArr.shift());
                return {
                    showingCategoriesArr,
                    allCategoriesNamesArr
                };
            });
        }

    };
    
    getAllCategories(){
        let allCategories = Object.keys(this.props.questions);
        let display5Categories = allCategories.slice(0,5);
        let leftOver = allCategories.slice(5);
        this.setState({
            allCategoriesNamesArr: leftOver,
            showingCategoriesArr: display5Categories
        })
        console.log(display5Categories)
        console.log(this.state);

    }


    chooseCategory(category){
        console.log(category)
        this.removeCategory(category)
        this.setState({
            currentUserTurn: true,
            currentUsersCategory: category,
        })
    }

    render() {
        let questionsObject = this.props.questions;
        let allCategories = Object.keys(questionsObject);
        console.log(allCategories)
        let questions = questionsObject[this.state.currentUsersCategory]
        let question;
        if (questions){
            questions = (questions["hard"])
            question = questions[Math.floor(Math.random() * (questions.length+1))]
        }
        //let categoryName = Object.keys(questionsObject)
        //let display = <GameCategoryRow round={1} questions={questionsObject[categoryName]}/>

        let display = "This will hold all other players of shrink to nothing";
        let currentCategories = "";
        let playersTurnDisplay = this.state.currentUserTurn? 
        (<div>
            <h1>Choose Your Final Category</h1>
            <h1>All Questions Are Hard</h1>
            {this.state.showingCategoriesArr.map(category=>(<div onClick={()=>this.chooseCategory(category)}>{category}</div>))}
        </div>)
        :
        (<div>
            <h1>"it is NOT the users turn"</h1>
        </div>);
        
        //Object.keys(questionsObject).map(catName => (<GameCategoryRow updateScore={this.props.updateScore} category={catName} key={catName} round={1} questions={questionsObject[catName]}/>))
        //Categories to choose from
        let categoriesDisplay = "";
        
        //console.log("category: "+categoryName)
        
        return(
            <div className="game-board-rnd3">
                <div className="game-board-rnd3-choose-category-display">
                    {playersTurnDisplay}
                </div>

                <div className="game-board-rnd3-other-players-display">
                    <h1>Round three</h1>
                    {display}
                </div>

                <div className="game-board-rnd3-main-user">
                    <UserDisplay updateScore={this.props.updateScore} question={question} chosenCategory={this.state.currentUsersCategory}/>
                </div>
                
            </div>
        )
    }
}

export default RoundOne;