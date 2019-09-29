const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Game = require('../../models/Game');
const User = require('../../models/User');
const keys = require('../../config/keys');

router.get('/test', (req, res) => {
  return res.json({ msg: "This is the games route"})
});

//  Route to create a new game (default one player);

router.post('/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const roomId = Math.floor(Math.random() * 10000);
    const isOnePlayerGame = req.body.isOnePlayerGame;

    Game.find().then(games => {
      let roomIds = games.map(game => {
        return game["roomId"]
      });

      while (roomIds.includes(roomId)) {
        roomId = Math.floor(Math.random() * 10000);
      }

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
    }) 
  }
);


//  Route to add the signed-in user to existing game

router.patch('/:gameId/addPlayer', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let gameId = req.params.gameId;
    let newPlayerId = req.user.id;

    Game.findOne({ _id: gameId }).then(game => {

      let players = game["players"];

      if (!players.includes(newPlayerId)) {
        game["players"].push(newPlayerId);
        game["numberPlayers"] += 1;

        Game.updateOne({ _id: gameId }, {
          $set: game
        }, function (err, result) {
          console.log(err);
          console.log(result);
        }).then(updated => res.json(updated));     
      } else {
        return res.status(400).json({ error: "User is already in game" });
      }   
    })
});

router.patch('/:gameId/removePlayer',
  (req, res) => {
    let gameId = req.params.gameId;
    let playerId = req.body["userId"];

    Game.findOne({ _id: gameId }).then(game => {

      let players = game["players"];
      let indexToDelete = players.indexOf(playerId)

      if (indexToDelete > -1) {
        players = players.splice(indexToDelete, 1);
        game["players"] = players;

        game["numberPlayers"] -= 1;

        Game.updateOne({ _id: gameId }, {
          $set: game
        }, function (err, result) {
          console.log(err);
          console.log(result);
        }).then(updated => res.json(updated));
      } else {
        return res.status(400).json({ error: "User is not in game" });
      }
    })
  });

router.patch('/:gameId/startGame',
  //  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let gameId = req.params.gameId;
    
    //  let requesterId = req.user.id;
    //  console.log(requesterId);

    Game.findOne({ _id: gameId }).then(game => {

      let creatorId = game["creator"];

      //  console.log(creatorId);
      //  res.json({ msg: [requesterId, creatorId]})
      //  if (creatorId === requesterId) {

        game["hasStarted"] = true;

        Game.updateOne({ _id: gameId }, {
          $set: game
        }, function (err, result) {
          console.log(err);
          console.log(result);
        }).then(updated => res.json(updated));

      // } 
      /*
      else {
        return res.status(400).json({ error: "Only game creator can start game" });
      }
      */
    })
  });


module.exports = router;