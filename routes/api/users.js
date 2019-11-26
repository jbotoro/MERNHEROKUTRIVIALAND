const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");
const keys = require("../../config/keys");

const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");

// User signup route

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "Username already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, username: user.username };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })

            .catch(err => console.log(err));
        });
      });
    }
  });
});

// User login route

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      errors.username = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, username: user.username };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// Route to retrieve an individual user's previous game stats

router.get("/:username", (req, res) => {
  username = req.params.username;
  User.findOne({ username: username }).then(user => {
    let response = {
      _id: user._id,
      username: user.username,
      gamesPlayed: user.gamesPlayed,
      pointsPerGame: user.pointsPerGame,
      questionsAnswered: user.questionsAnswered,
      questionsCorrect: user.questionsCorrect,
      averageRoundOne: user.averageRoundOne,
      averageRoundTwo: user.averageRoundTwo
    };
    res.json(response);
  });
});

//  Route to update a user's game stats at the end of their game

router.patch("/:username/update", (req, res) => {
  const username = req.params.username;
  const userUpdate = req.body;

  User.findOne({ username: username }).then(user => {
    user["gamesPlayed"] += 1;
    user["pointsPerGame"] = Math.floor(
      (user["pointsPerGame"] + userUpdate["pointsInGame"]) / user["gamesPlayed"]
    );
    user["questionsAnswered"] =
      user["questionsAnswered"] + userUpdate["questionsAnswered"];
    user["questionsCorrect"] =
      user["questionsCorrect"] + userUpdate["questionsCorrect"];
    user["averageRoundOne"] = Math.floor(
      (userUpdate["roundOneScore"] + user["averageRoundOne"]) /
        user["gamesPlayed"]
    );
    user["averageRoundTwo"] = Math.floor(
      (userUpdate["roundTwoScore"] + user["averageRoundTwo"]) /
        user["gamesPlayed"]
    );

    User.updateOne(
      { username: username },
      {
        $set: user
      },
      function(err, result) {
        if (err) console.log(err);
        res.json(result);
      }
    );
  });
});

router.patch("/updateCurrentScore", (req, res) => {
  const userId = req.user.id;
  const currentScore = req.body.currentScore;

  User.update(
    { _id: userId },
    {
      currentScore: currentScore
    }
  );
});

// Route to retrieve all players stats in a game -- NOT WORKING

router.get("/players", (req, res) => {
  /*
  players = req.params.query;
  console.log(players);
  res.json(players);

  /*
  User.find({ username: { $in: players }})
  // OR:  User.find({ _id: { $in: players }})
    
    .then(players => res.json(players));
  */
});

// router.patch("/updateScore", (req, res) => {});

module.exports = router;
