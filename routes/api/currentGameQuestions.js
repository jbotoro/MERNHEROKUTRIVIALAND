const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const Game = require("../../models/Game");
const User = require("../../models/User");
const keys = require("../../config/keys");
const CurrentGameQuestions = require("../../models/CurrentGameQuestions");

router.post("/create", (req, res) => {
  let roomId = req.body.roomId;
  let round1Questions = req.body.round1Questions;
  let round2Questions = req.body.round2Questions;
  let round3Questions = req.body.round3Questions;

  const currentGameQuestions = new CurrentGameQuestions({
    roomId,
    round1Questions,
    round2Questions,
    round3Questions
  });

  currentGameQuestions
    .save()
    .then(questions => res.json(questions))
    .catch(err => console.log("COULDN'T CREATE QUESTIONS: ", err));
});

router.get("/getCurrentQuestions/:gameId", (req, res) => {
  let roomId = req.params.gameId;

  console.log(
    "-----------------------------------------------room id in UTIL",
    roomId
  );

  CurrentGameQuestions.find({ roomId: roomId })
    .then(questions => {
      res.json(questions);
      console.log(questions);
    })
    .catch(err => console.log("QUESTIONS DON'T EXIST FOR THIS GAME: ", err));
});

router.delete("/deleteCurrentGameQuestions", (req, res) => {
  let roomId = req.body.roomId;

  CurrentGameQuestions.find({ roomId: roomId })
    .then(questions => {
      questions.remove();
    })
    .catch(err =>
      console.log("COULDN'T DELETE QUESTIONS FOR THIS GAME: ", err)
    );
});

module.exports = router;
