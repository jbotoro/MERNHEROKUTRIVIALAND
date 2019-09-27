const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../models/User');
const keys = require('../../config/keys');

const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');


/*
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username
  });
})
*/

router.post("/signup", (req, res) => {

  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        errors.username = 'Username already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, username: user.username };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })

              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        errors.username = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, username: user.username };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
          } else {
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })
})

router.get('/:username', (req, res) => {
  username = req.params.username;
  User.findOne({ username: username})
    .then(user => res.json(user));
});

/*
router.get('/players', (req, res) => {
  players = req.body;
  console.log(players);
  User.find({ username: { $in: players }})
  // OR:  User.find({ _id: { $in: players }})
    
    .then(players => res.json(players));
})
*/

router.patch('/:username/update', (req, res) => {
  const username = req.params.username;
  const userUpdate = req.body;

  User.findOne({ username: username })
    .then(user => {

      console.log(user)

      user["gamesPlayed"] += 1;
      user["pointsPerGame"] = user["pointsPerGame"] + userUpdate["pointsInGame"];
      user["questionsAnswered"] = user["questionsAnswered"] +
        userUpdate["questionsAnswered"];
      user["questionsCorrect"] = user["questionsCorrect"] + 
        userUpdate["questionsCorrect"];
      user["averageRoundOne"] = Math.floor((userUpdate["roundOneScore"] +
        user["averageRoundOne"]) / user["gamesPlayed"]);
      user["averageRoundTwo"] = Math.floor((userUpdate["roundTwoScore"] +
        user["averageRoundTwo"]) / user["gamesPlayed"]);

      User.update({ username: username }, {
        $set: user
      }, function (err, result) {
        console.log(err);
        console.log(result);
        res.json(result);
      })
    })
  })

module.exports = router;