// To retrieve all questions at the beginning of the game, send a GET request
//      "/api/questions/getQuestions" with no additional data required.

//            GET, "api/questions/getQuestions"


// To retrieve all the questions from a given category, send a GET request to
//       "/api/question/________", where the blank route is one of the following:

//         [ general, books, film, music, theatre, television, videogames,
//          boardgames, science, computers, math, mythology, sports,
//           geography, history, politics, art, celebrities, animals, vehicles,
//            comics, gadgets, anime, cartoons ]

//            GET, "api/questions/:category"


// To retrieve questions from a certain NUMber of random categories, send a
//        GET request to "/api/questions/categories/:num", where :num is 
//        replaced with the NUMber of random categories you'd like questions from.

//            GET, "api/questions/categories/:num"


// To retrieve user stats for the profile page, send a GET request to
//      "/api/users/:username" -- where :username is replaced with user's actual
//        username -- with no additional data required for the request.

//            GET, "api/users/:username"


// To update user stats, at end of user's game sent a PATCH request to 
//     "/api/users/:username/update" -- where :username is replaced with user's 
//     actual username -- with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object

/*
              GET, "api/users/:username/update, 
                      {
                        "pointsInGame": { Integer },
                        "questionsAnswered": { Integer },
                        "questionsCorrect": { Integer },
                        "roundOneScore": { Integer },
                        "roundTwoScore": { Integer }
                      };
*/

// To update game stats, at end of game sent a PATCH request to 
//     "/api/gameStats/update" with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object

const gameUpdateObject = {
  "numberQuestionsAsked": {Integer},
  "numberQuestionsCorrect": {Integer},
  "roundOnePassingPoints": {Integer},
  "roundTwoPassingPoints": {Integer},
  "winningPoints": {Integer},
  "playersAndScores": [
    [ "Player1username", {IntegerScore} ],
    [ "Player2username", {IntegerScore} ],
    [ "Player3username", {IntegerScore} ]
  ]
};


// I am still working on the functionality of the /players route to get all the
//      info for all the players in a game.
