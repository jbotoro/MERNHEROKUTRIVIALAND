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
let allQuestions;
let allQuestionsCategories = Object.keys(allQuestions);

let columns = {};
for( let i = 0; i < 3; i++) {
    let randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
    let randomCategory = allQuestionsCategories[randomCategoryIndex];
    
    columns[randomCategory] = {};
    allQuestionsCategories.splice(randomCategoryIndex, 1);
    
    columns.randomCategory["easy"] = [];
    columns.randomCategory["medium"] = [];
    columns.randomCategory["hard"] = [];

    queryReturn.forEach(question => {
        if(question.difficulty === 'easy') {
            columns.randomCategory["easy"].push(question);
        } else if (question.difficulty === 'medium') {
            columns.randomCategory["medium"].push(question);
        } else {
            columns.randomCategory["hard"].push(question);
        }
    });
    
    // now insert questions from category and diffculites into our columns pojo
    
}
let currentCategories = Object.keys(columns);
let currentBoard = {};

currentCategories.forEach(category => {
       currentBoard[category] = [];
       for(let i = 0; i < 4; i++) { // easy for 0, 1 & 2 for medium, 3 & 4 for hard
            if (i === 0) { //easy question
                let randIndex = Math.floor(Math.random() * columns[category]["easy"].length);
                let randQuestion = columns[category]["easy"][randIndex];
                currentBoard[category].push(randQuestion);
            } else if (i === 1 || i === 2) {
                let randIndex = Math.floor(Math.random() * columns[category]["medium"].length);
                let randQuestion = columns[category]["medium"][randIndex];
                currentBoard[category].push(randQuestion);
                columns[category]["medium"].splice(randIndex, 1); // mutates array and no longer contains that question
            } else if ( i === 3 || i === 4 ) {
                let randIndex = Math.floor(Math.random() * columns[category]["hard"].length);
                let randQuestion = columns[category]["hard"][randIndex];
                currentBoard[category].push(randQuestion);
                columns[category]["hard"].splice(randIndex, 1); // mutates array and no longer contains that question
            }
       }
   }
);



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


