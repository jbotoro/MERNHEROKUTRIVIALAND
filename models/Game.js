const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  players: {
    type: Array,
    items: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    uniqueItems: true
  },

  questions: {
    type: Object
  },

  round: {
    type: Number,
    default: 1
  },

  round2Rooms: {
    type: Object,
    default: {}
  },

  numberPlayers: {
    type: Number
  },

  round3Room: {
    type: Object,
    default: {}
  },

  roomId: {
    type: Number,
    minimum: 1000,
    maximum: 9999
  },

  isOnePlayerGame: {
    type: Boolean,
    default: true
  },

  hasStarted: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  startedAt: {
    type: Date,
    default: null
  }
});

module.exports = Game = mongoose.model("games", GameSchema);
