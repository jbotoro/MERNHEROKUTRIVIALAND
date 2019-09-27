// To retrieve user stats for the profile page, send a GET request to
//      "/api/users/:username" -- where :username is replaced with user's actual
//        username -- with no additional data required for the request.

//            GET, "api/users/:username"


// To retrieve all info for the users in a single game, send a GET request to


// To update game stats, at end of game sent a PATCH request to 
//     "/api/gameStats/update" with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object

const gameUpdateObject = {
  numberQuestionsAsked: {Integer},
  numberQuestionCorrect: {Integer},
  roundOnePassingPoints: {Integer},
  roundTwoPassingPoints: {Integer},
  winningPoints: {Integer},
  playersAndScores: [
    [ "Player1username", {IntegerScore} ],
    [ "Player2username", {IntegerScore} ],
    [ "Player3username", {IntegerScore} ]
  ]
};

// To update user stats, at end of user's game sent a PATCH request to 
//     "/api/users/:username/update" -- where :username is replaced with user's 
//     actual username -- with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object

const userUpdate = {
  pointsInGame: {Integer},
  questionsAnswered: {Integer},
  questionsCorrect: {Integer},
  roundOneScore: {Integer},
  roundTwoScore: {Integer}
};
