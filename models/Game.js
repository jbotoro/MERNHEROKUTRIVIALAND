const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({

  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  players: {
    type: Array,
    items: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    uniqueItems: true
  },

  numberPlayers: {
    type: Number,
  },

  roomId: {
    type: Number,
    maximum: 9999
  },

  isOnePlayerGame: {
    type: Boolean
  },

  hasStarted: {
    type: Boolean
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  startedAt: {
    type: Date
  }
  
})


module.exports = Game = mongoose.model('games', GameSchema);