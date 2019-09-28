const express = require("express");
const router = express.Router();

const keys = require('../../config/keys');
const GameStat = require('../../models/GameStat')


router.get("/show", (req, res) => {
  const id = "5d8d008a437cde73f8cdf31d"    //keys.gameStatsId;
  GameStat.findById(id)
    .then(stats => res.json({ stats }))
    .catch(err => console.log(err));
})


router.patch("/update", (req, res) => {
  
  const id = "5d8d008a437cde73f8cdf31d"             //keys.gameStatsId;
  const gameUpdate = req.body;
  const newScores = req.body["playersAndScores"];
  const players = Object.keys(newScores).map(key => {
    return [key, newScores[key]]
  });
  
  GameStat.findOne({_id: id}).then(stats => {

    function compareScores(playerA, playerB) {
      return playerB[1] - playerA[1];
    }

    playersOrdered = players.sort(compareScores);
    
    let topTenScores = stats["topTenScores"].slice();
    let topTenWinningScores = stats["topTenWinningScores"].slice();
    ///  let tenMostPlayedPlayers = stats["tenMostPlayedPlayers"].slice();

    topTenScores = topTenScores.concat(playersOrdered)
      .sort(compareScores).slice(0, 10);

    topTenWinningScores.push(playersOrdered[0])
    topTenWinningScores.sort(compareScores).slice(0, 10);

    ///  playersByGames = players.map(player => {})

    stats["totalGamesPlayed"] += 1;
    stats["totalQuestionsAsked"] += gameUpdate["numberQuestionsAsked"];
    stats["totalQuestionsCorrect"] += gameUpdate["numberQuestionsCorrect"];

    stats["averageRoundOnePassingPoints"] = Math.floor(
        ((stats["averageRoundOnePassingPoints"] * 
          (stats["totalGamesPlayed"] - 1)) +
            gameUpdate["roundOnePassingPoints"]) / stats["totalGamesPlayed"]);

    stats["averageRoundTwoPassingPoints"] = Math.floor(
        ((stats["averageRoundTwoPassingPoints"] *
          (stats["totalGamesPlayed"] - 1)) +
            gameUpdate["roundTwoPassingPoints"]) / stats["totalGamesPlayed"]);

    stats["averageRoundThreeWinningPoints"] = Math.floor(
        ((stats["averageRoundThreeWinningPoints"] *
          (stats["totalGamesPlayed"] - 1)) +
            gameUpdate["winningPoints"]) / stats["totalGamesPlayed"]);

    stats["topTenScores"] = topTenScores;
    stats["topTenWinningScores"] = topTenWinningScores;

    GameStat.updateOne({ _id: id }, {
      $set: stats
    }, function (err, result) {
      console.log(err);
      console.log(result);
    })
      .catch(err => console.log(err))
      .then(updated => res.json(updated));
  })
})

/*
router.patch("/reset", (req, res) => {

  const id = "5d8d008a437cde73f8cdf31d"    //keys.gameStatsId;
  const gameUpdate = req.body;

  GameStat.findOne({ _id: id }).then(stats => {
    stats["totalGamesPlayed"] = 0;
    stats["totalQuestionsAsked"] = 0;
    stats["totalQuestionsCorrect"] = 0;
    stats["averageRoundOnePassingPoints"] = 0;
    stats["averageRoundTwoPassingPoints"] = 0;
    stats["averageRoundThreeWinningPoints"] = 0;

    GameStat.updateOne({ _id: id }, {
      $set: stats
    }, function (err, result) {
      console.log(err);
      console.log(result);
    })
      .catch(err => console.log(err))
      .then(updated => res.json(updated));
  })
})
*/

/*
router.post("/post", (req, res) => {
  const gameStats = new GameStat();
  gameStats.save()
    .then(gameStats => res.json({ gameStats }))
})
*/

// gameStatsId: "5d8d008a437cde73f8cdf31d"

module.exports = router;