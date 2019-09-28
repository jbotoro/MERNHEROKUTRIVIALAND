const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  category: {
    type: String,
    required: true,
    default: "General"
  },

  questionType: {
    type: String,
  },

  difficulty: {
    type: String,
    required: true,
  },

  question: {
    type: String,
    required: true
  },

  correctAnswer: {
    type: String,
    required: true
  },

  incorrectAnswers: {
    type: Array,
    items: {
      type: String
    },
    maxItems: 3,
    default: []
  }
})

module.exports = Question = mongoose.model('questions', QuestionSchema);