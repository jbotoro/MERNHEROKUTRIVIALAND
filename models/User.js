const mongoose = require("mongoose");
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
  },

  isActive: {
    type: Object,
    default: {
      isActive: false,
      roomId: null,
      isTurn: true,
      currentScore: 0,
      round1Score: 0,
      round2Score: 0,
      round3Score: 0
    }
  }

  // this may have to be changed, but putting current score and the round scores for
  // the multiplayer games so that the players array in Game model has access to this
  // info,

  // these values will be reset

  // below values can be commented out for now

  // currentScore: {
  //   type: Number,
  //   default: 0
  // },

  // round1Score: {
  //   type: Number,
  //   default: 0
  // },

  // round2Score: {
  //   type: Number,
  //   default: 0
  // },

  // round3Score: {
  //   type: Number,
  //   default: 0
  // }
});

module.exports = User = mongoose.model("users", UserSchema);
