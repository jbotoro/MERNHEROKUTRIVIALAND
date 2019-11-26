const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurrentGameQuestionsSchema = new Schema({
  roomId: {
    type: Number
  },

  round1Questions: {
    type: Object
  },

  round2Questions: {
    type: Object
  },

  round3Questions: {
    type: Object
  }
});

module.exports = CurrentGameQuestions = mongoose.model(
  "currentQuestions",
  CurrentGameQuestionsSchema
);
