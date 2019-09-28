const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Game = require('../../models/Game');
const User = require('../../models/User');
const keys = require('../../config/keys');

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const roomId = Math.floor(Math.random() * 10000);
    const isOnePlayerGame = req.body.isOnePlayerGame;

    const newGame = new Game({
      creator: req.user.id,
      players: [req.user.id],
      numberPlayers: 1,
      roomId: roomId,
      isOnePlayerGame: isOnePlayerGame,
      hasStarted: false,
      startedAt: null
    });

    newGame.save().then(game => res.json(game));
  }
);


module.exports = router;