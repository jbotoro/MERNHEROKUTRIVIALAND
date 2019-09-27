// Board 1, each column is a pojo with the key being the category and the values being an array 
// with five questions having 
// First element being the string of the category and the remaining elements being the questions
// Each grid will contain the pojo itself regarding the question, answer and incorrect answers
// as well as difficulty

// Following code represents each "column" which will just be single arrays containing category as
// first element, easy diff question as 2nd ele, medium as 3rd & 4th, and hard as 5th & 6th

// Global pojo queried here
// below represents entire pojo that houses all categories with each categories values are a set of 
// dificulties with 
const generateRound1Board = (round1Questions) => {

    // let round1Questions = ; // axios call, essentially ajax call, should be in dispatch to props
    let round1QuestionsCategories = Object.keys(round1Questions);

    let columns = {};
    round1QuestionsCategories.forEach(category => {

        columns[category] = {};

        columns[category]["easy"] = [];
        columns[category]["medium"] = [];
        columns[category]["hard"] = [];
        
        round1Questions[category].forEach(question => {
            // debugger
            if (question['difficulty'] === 'easy') {
                columns[category]["easy"].push(question);
            } else if (question['difficulty'] === 'medium') {
                columns[category]["medium"].push(question);
            } else {
                columns[category]["hard"].push(question);
            }
        });

        // now insert questions from category and diffculites into our columns pojo

    }
    )

    let currentBoard = {};

    Object.keys(columns).forEach(category => {
        currentBoard[category] = [];
        for (let i = 0; i < 5; i++) { // easy for 0, 1 & 2 for medium, 3 & 4 for hard
            if (i === 0) { //easy question
                let randIndex = Math.floor(Math.random() * columns[category]["easy"].length);
                let randQuestion = columns[category]["easy"][randIndex];
                currentBoard[category].push(randQuestion);
            } else if (i === 1 || i === 2) {
                let randIndex = Math.floor(Math.random() * columns[category]["medium"].length);
                let randQuestion = columns[category]["medium"][randIndex];
                currentBoard[category].push(randQuestion);
                columns[category]["medium"].splice(randIndex, 1); // mutates array and no longer contains that question
            } else if (i === 3 || i === 4) {
                let randIndex = Math.floor(Math.random() * columns[category]["hard"].length);
                let randQuestion = columns[category]["hard"][randIndex];
                currentBoard[category].push(randQuestion);
                columns[category]["hard"].splice(randIndex, 1); // mutates array and no longer contains that question
            }
        }
    }
    );

    return [currentBoard, 'round 1'];
}

export default generateRound1Board;


// const replacementCategory = (round1Questions, categoriesUsed) => {
    
//     let round1QuestionsCategories = Object.keys(round1Questions);

//     let randomCategoryIndex = Math.floor(Math.random() * round1QuestionsCategories.length);
//     let selectedCategory = round1QuestionsCategories[randomCategoryIndex];

//     while (categoriesUsed.includes(randomCategory)) {
//         randomCategoryIndex = Math.floor(Math.random() * round1QuestionsCategories.length);
//         selectedCategory = round1QuestionsCategories[randomCategoryIndex];
//     }

//     let randomCategory = {};
//     categoriesUsed.push(selectedCategory);
//     // round1QuestionsCategories.splice(randomCategoryIndex, 1);

//     randomCategory["easy"] = [];
//     randomCategory["medium"] = [];
//     randomCategory["hard"] = [];

//     round1Questions[selectedCategory].forEach(question => {
//         if (question.difficulty === 'easy') {
//             randomCategory["easy"].push(question);
//         } else if (question.difficulty === 'medium') {
//             randomCategory["medium"].push(question);
//         } else {
//             randomCategory["hard"].push(question);
//         }
//     });

//     newColumn = [selectedCategory, []];

//     for (let i = 0; i < 4; i++) { // easy for 0, 1 & 2 for medium, 3 & 4 for hard
//         if (i === 0) { //easy question
//             let randIndex = Math.floor(Math.random() * randomCategory["easy"].length);
//             let randQuestion = randomCategory["easy"][randIndex];
//             newColumn[1].push(randQuestion);
//         } else if (i === 1 || i === 2) {
//             let randIndex = Math.floor(Math.random() * randomCategory["medium"].length);
//             let randQuestion = randomCategory["medium"][randIndex];
//             newColumn[1].push(randQuestion);
//             randomCategory["medium"].splice(randIndex, 1); // mutates array and no longer contains that question
//         } else if (i === 3 || i === 4) {
//             let randIndex = Math.floor(Math.random() * randomCategory["hard"].length);
//             let randQuestion = randomCategory["hard"][randIndex];
//             newColumn[1].push(randQuestion);
//             randomCategory["hard"].splice(randIndex, 1); // mutates array and no longer contains that question
//         }
//     }
    
//     return newColumn;  // array [ "String of category", [ Array of pojo questions ] ]
// }

// const replaceColumn = () => {

// }

// for loop to gather questions for each column array
// below was code that assumes that we were returning an array for each column of the category, going 
// pojo logic above, 
// commenting out code below just in case for decision of use




// for(let j = 0; j < columns.length; j++) {
   
//     let easyQuestionsArr = Object.values(allQuestions[category]["easy"]);
//     let mediumQuestionsArr = Object.values(allQuestions[category]["medium"]);
//     let hardQuestionsArr = Object.values(allQuestions[category]["hard"]);
//     for (let k = 1; k < 6; k++) {
//         let category = columns[j][0];
//         if ( k === 1 ) {
            
//             let Question = easyQuestionsArr[Math.floor(Math.random() * easyQuestionsArr.length)];
//             columns[j][k]= Question;

//         }
//         else if ( k === 2 || k === 3) {
            
//             let currentQuestionIndex = Math.floor(Math.random() * mediumQuestionsArr.length);
//             let currentQuestion = mediumQuestionsArr[currentQuestionIndex];
//             columns[j][k] = currentQuestion;
//             mediumQuestionsArr.splice(currentQuestionIndex,1);
//         } 
//         else if ( k === 4 || k === 5) {
//             let currentQuestionIndex = Math.floor(Math.random() * hardQuestionsArr.length);
//             let currentQuestion = hardQuestionsArr[currentQuestionIndex];
//             columns[j][k] = currentQuestion;
//             hardQuestionsArr.splice(currentQuestionIndex, 1);
//         }
//     }
// }


