/*  QUESTIONS  */

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


/*  USERS  */

// To retrieve user stats for the profile page, send a GET request to
//      "/api/users/:username" -- where :username is replaced with user's actual
//        username -- with no additional data required for the request.

//            GET, "api/users/:username"


// To update user stats, at end of user's game sent a PATCH request to 
//     "/api/users/:username/update" -- where :username is replaced with user's 
//     actual username -- with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object

/*
              PATCH, "api/users/:username/update", 
                      {
                        "pointsInGame": { Integer },
                        "questionsAnswered": { Integer },
                        "questionsCorrect": { Integer },
                        "roundOneScore": { Integer },
                        "roundTwoScore": { Integer }
                      };
*/


/*  GAMES  */

// To create a game WHILE A USER IS SIGNED IN, send a POST request to
//    "/api/games/create", with a body/data object with the following
//      OPTIONAL parameters:
//          { isOnePlayerGame: {Boolean true or false} }
//      The value of isOnePlayerGame will default to TRUE. Once the POST
//      request is complete, the route will send back the new Game object, which
//      is in the shape of the following:
      /*
            {
              creator: {corresponds to signed-in-users mongo "_id" in the dB},
              players: {initializes to Array with "_id" of the game creator},
              numberPlayers: {Number: initializes to 1},
              roomId: {A random room ID between 1000 and 9999, unique in dB},
              isOnePlayerGame: {Boolean: defaults to TRUE},
              hasStarted: {Boolean: defaults to FALSE},
              createdAt: {Date obj}
              startedAt: {Date obj: default to NULL, will set when game starts}
            }
      */


// To have the signed-in user join an open game, send a PATCH request to 
//      "/api/:gameId/addPlayer" -- where :gameId is replaced with the _id
//        property of the game in question; the userId will be retrieved
//          from the signed-in users jwt authentication token. If the user is
//            already in the game, or is the creator, return 400 level response.

//          PATCH, "/api/:gameId/addPlayer" (no data/body info necessary)


// To remove a user from an existing game, send a PATCH request to
//       "/api/:gameId/removePlayer -- where :gameId is replaced with the _id
//        property of the game in question -- along with a data/body object with
//        a key of "userId" whose value is the _id of the player to remove. If
//        the player is not already in the game, returns 400 level response:

/*          PATCH, "/api/:gameId/removePlayer", {
                  "userId": {String: Player's database _id string}  
                }
*/


// To set the hasStarted property to true when starting the game (to keep new
//    players from joining the lobby), send a PATCH request to '/api/:gameId/startGame'
//      where :gameId is replaced with the _id property of game in question.
//      NOTE: This is not strictly necessary, except for keeping players from joining
//      NOTE 2: I want logic to only allow creator to start game -- not finished yet, though.

//          PATCH, "/api/:gameId/startGame"


/* GAME STATS */

// To update game stats, at end of game sent a PATCH request to 
//     "/api/gameStats/update" with the following object as body/data:
//          //   {Integer} just stands for pure integer, not an Object
/*
              PATCH, "api/gameStats/update", 
                      {
                        "numberQuestionsAsked": {Integer},
                        "numberQuestionsCorrect": {Integer},
                        "roundOnePassingPoints": {Integer},
                        "roundTwoPassingPoints": {Integer},
                        "winningPoints": {Integer},
                        "playersAndScores": [
                          [ "Player1username", {IntegerScore} ],
                          [ "Player2username", {IntegerScore} ],
                          [ "Player3username", {IntegerScore} ],
                          etc. ... 
                        ]
                      };
*/
