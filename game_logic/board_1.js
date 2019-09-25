// Board 1, each column is essentially an array with 6 elements
// First element being the string of the category and the remaining elements being the questions
// Each grid will contain the pojo itself regarding the question, answer and incorrect answers
// as well as difficulty

// Following code represents each "column" which will just be single arrays containing category as
// first element, easy diff question as 2nd ele, medium as 3rd & 4th, and hard as 5th & 6th

// Global pojo queried here
// 
let allQuestions;
let allQuestionsCategories = Object.keys(allQuestions);

let columns = {};
for( let i = 0; i < 4; i++) {
    let randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
    let randomCategory = allQuestionsCategories[randomCategoryIndex];
    
    columns[randomCategory] = {};
    allQuestionsCategories.splice(randomCategoryIndex, 1);
    
    columns.randomCategory["easy"] = [];
    columns.randomCategory["medium"] = [];
    columns.randomCategory["hard"] = [];
    
    
    
}   

// for loop to gather questions for each column array

for(let j = 0; j < columns.length; j++) {
   
    let easyQuestionsArr = Object.values(allQuestions[category]["easy"]);
    let mediumQuestionsArr = Object.values(allQuestions[category]["medium"]);
    let hardQuestionsArr = Object.values(allQuestions[category]["hard"]);
    for (let k = 1; k < 6; k++) {
        let category = columns[j][0];
        if ( k === 1 ) {
            
            let Question = easyQuestionsArr[Math.floor(Math.random() * easyQuestionsArr.length)];
            columns[j][k]= Question;

        }
        else if ( k === 2 || k === 3) {
            
            let currentQuestionIndex = Math.floor(Math.random() * mediumQuestionsArr.length);
            let currentQuestion = mediumQuestionsArr[currentQuestionIndex];
            columns[j][k] = currentQuestion;
            mediumQuestionsArr.splice(currentQuestionIndex,1);
        } 
        else if ( k === 4 || k === 5) {
            let currentQuestionIndex = Math.floor(Math.random() * hardQuestionsArr.length);
            let currentQuestion = hardQuestionsArr[currentQuestionIndex];
            columns[j][k] = currentQuestion;
            hardQuestionsArr.splice(currentQuestionIndex, 1);
        }
    }
}


