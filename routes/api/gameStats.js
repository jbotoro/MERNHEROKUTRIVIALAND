const express = require("express");
const router = express.Router();

const keys = require('../../config/keys');

//  const mongoose = require('mongoose');
//  const passport = require('passport');

const GameStat = require('../../models/GameStat')


router.get("/show", (req, res) => {
  const id = "5d8d008a437cde73f8cdf31d"    //keys.gameStatsId;
  GameStat.findById(id)
    .then(stats => res.json({ stats }))
    .catch(err => console.log(err));
})

router.patch("/update", (req, res) => {
  const id = "5d8d008a437cde73f8cdf31d"    //keys.gameStatsId;
  const gameUpdate = req.body;
  
  GameStat.findOne({_id: id}).then(stats => {
      stats["totalGamesPlayed"] += 1;
      stats["totalQuestionsAsked"] += gameUpdate["numberQuestionsAsked"];
      stats["totalQuestionsCorrect"] += gameUpdate["numberQuestionsCorrect"];
      stats["averageRoundOnePassingPoints"] =
        Math.floor((stats["averageRoundOnePassingPoints"] +
          gameUpdate["roundOnePassingPoints"]) / stats["totalGamesPlayed"]);
      stats["averageRoundTwoPassingPoints"] =
        Math.floor((stats["averageRoundTwoPassingPoints"] +
          gameUpdate["roundTwoPassingPoints"]) / stats["totalGamesPlayed"]);
      stats["averageRoundThreeWinningPoints"] =
        Math.floor((stats["averageRoundThreeWinningPoints"] +
          gameUpdate["winningPoints"]) / stats["totalGamesPlayed"]);

      GameStat.update({ _id: id }, {
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
router.post("/post", (req, res) => {
  const gameStats = new GameStat();
  gameStats.save()
    .then(gameStats => res.json({ gameStats }))
})
*/

// gameStatsId: "5d8d008a437cde73f8cdf31d"

module.exports = router;