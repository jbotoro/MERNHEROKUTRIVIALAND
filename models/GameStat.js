const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameStatSchema = new Schema({
  
  totalGamesPlayed: {
    type: Number,
    default: 0
  },

  totalQuestionsAsked: {
    type: Number,
    default: 0
  },

  totalQuestionsCorrect: {
    type: Number,
    default: 0
  },

  averageRoundOnePassingPoints: {
    type: Number,
    default: 500
  },

  averageRoundTwoPassingPoints: {
    type: Number,
    default: 1000
  },

  averageRoundThreeWinningPoints: {
    type: Number,
    default: 1500
  },

  // Store as an Array of length 10 where each element is an array of the form
  //    [ {username}, {topScore} ]

  topTenScores: {
    type: Array,
    items: {
      type: Array,
      items: [
        {
          type: String
        },
        {
          type: Number
        }
      ]
    },
    maxItems: 10,
    default: []
  },

  // Store as an Array of length 10 where each element is an array of the form
  //    [ {username}, {winningScore} ]

  topTenWinningScores: {
    type: Array,
    items: {
      type: Array,
      items: [
        {
          type: String
        },
        {
          type: Number
        }
      ]
    },
    maxItems: 10,
    default: []
  },

  // Store as an Array of length 10 where each element is an array of the form
  //    [ {username}, {gamesPlayed} ]
  
  tenMostPlayedPlayers: {
    type: Array,
    items: {
      type: Array,
      items: [
        {
          type: String
        },
        {
          type: Number
        }
      ]
    },
    maxItems: 10,
    default: []
  },


});

module.exports = GameStat = mongoose.model('gameStats', GameStatSchema);