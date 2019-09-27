const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gamesPlayed: {
    type: Number,
    default: 0
  },
  pointsPerGame: {
    type: Number,
    default: 0
  },
  questionsAnswered: {
    type: Number,
    default: 0
  },
  questionsCorrect: {
    type: Number,
    default: 0
  },
  joined: {
    type: Date,
    default: Date.now
  },
  averageRoundOne: {
    type: Number,
    default: 0
  },
  averageRoundTwo: {
    type: Number,
    default: 0
  }
})

module.exports = User = mongoose.model('users', UserSchema);