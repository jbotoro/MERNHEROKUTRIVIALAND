const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const db = require('../../config/keys').mongoURI;
// const Question = mongoose.model('questions', QuestionSchema);
const Question = require("../../models/Question");
const CATEGORIES = require("../../categoriesList");


// Routes for individual categories

router.get('/general', (req, res) => {
  Question.find({category: "General"})
    .then(questions => res.json(questions))
})

router.get('/books', (req, res) => {
  Question.find({ category: "Books" })
    .then(questions => res.json(questions))
})

router.get('/film', (req, res) => {
  Question.find({ category: "Film" })
    .then(questions => res.json(questions))
})

router.get('/music', (req, res) => {
  Question.find({ category: "Music" })
    .then(questions => res.json(questions))
})

router.get('/theatre', (req, res) => {
  Question.find({ category: "Theatre" })
    .then(questions => res.json(questions))
})

router.get('/television', (req, res) => {
  Question.find({ category: "Television" })
    .then(questions => res.json(questions))
})

router.get('/videogames', (req, res) => {
  Question.find({ category: "Video_Games" })
    .then(questions => res.json(questions))
})

router.get('/boardgames', (req, res) => {
  Question.find({ category: "Board_Games" })
    .then(questions => res.json(questions))
})

router.get('/naturalscience', (req, res) => {
  Question.find({ category: "Science" })
    .then(questions => res.json(questions))
})

router.get('/computers', (req, res) => {
  Question.find({ category: "Computers" })
    .then(questions => res.json(questions))
})

router.get('/math', (req, res) => {
  Question.find({ category: "Mathematics" })
    .then(questions => res.json(questions))
})

router.get('/mythology', (req, res) => {
  Question.find({ category: "Mythology" })
    .then(questions => res.json(questions))
})

router.get('/sports', (req, res) => {
  Question.find({ category: "Sports" })
    .then(questions => res.json(questions))
})

router.get('/geography', (req, res) => {
  Question.find({ category: "Geography" })
    .then(questions => res.json(questions))
})

router.get('/history', (req, res) => {
  Question.find({ category: "History" })
    .then(questions => res.json(questions))
})

router.get('/politics', (req, res) => {
  Question.find({ category: "Politics" })
    .then(questions => res.json(questions))
})

router.get('/art', (req, res) => {
  Question.find({ category: "Art" })
    .then(questions => res.json(questions))
})

router.get('/celebrities', (req, res) => {
  Question.find({ category: "Celebrities" })
    .then(questions => res.json(questions))
})

router.get('/animals', (req, res) => {
  Question.find({ category: "Animals" })
    .then(questions => res.json(questions))
})

router.get('/vehicles', (req, res) => {
  Question.find({ category: "Vehicles" })
    .then(questions => res.json(questions))
})

router.get('/comics', (req, res) => {
  Question.find({ category: "Comics" })
    .then(questions => res.json(questions))
})

router.get('/gadgets', (req, res) => {
  Question.find({ category: "Gadgets" })
    .then(questions => res.json(questions))
})

router.get('/anime', (req, res) => {
  Question.find({ category: "Anime" })
    .then(questions => res.json(questions))
})

router.get('/cartoons', (req, res) => {
  Question.find({ category: "Cartoons" })
    .then(questions => res.json(questions))
})

// Route for retrieving all questions

router.get('/getQuestions', (req, res) => {

  Question.find()
    .then(questions => {
      let organized = {};

      questions.forEach(question => {
        let cat = question["category"];
        if (!organized[cat]) organized[cat] = [];
        organized[cat].push(question);
      })

      return res.json(organized);
    })
})

// Route for Round One questions

router.get('/roundOne', (req, res) => {

  let allQuestionsCategories = Object.keys(CATEGORIES);

    let columns = {};

    for (let i = 0; i < 7; i++) {
      let randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
      let randomCategory = allQuestionsCategories[randomCategoryIndex];

      while (columns.hasOwnProperty(randomCategory)) {
        randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
        randomCategory = allQuestionsCategories[randomCategoryIndex];
      }
      
      columns[randomCategory] = {};
    }
    
    let cats = Object.keys(columns);

    Question.find({ category: { $in: cats}})
      .then(questions => {
        let organized = {};

        questions.forEach(question => {
          let cat = question["category"];
          if (!organized[cat]) organized[cat] = [];
          organized[cat].push(question);
        })

        return res.json(organized);
      })
})

router.get('/decode', (req, res) => {

  function decodeHTMLEntities(text) {
    var entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#039', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
      text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
  }

  Question.find()
    .then(questions => {
      questions.forEach(question => {
        let id = question["_id"];
        let newQuestion = {};
        let newValue = decodeHTMLEntities(question["question"]);
        newQuestion["question"] = newValue;
        Question.updateOne({ _id: id }, newQuestion, (err, success) => {
          console.log(success);
          console.log(err);
        })
      })
  })
  

})


router.get('/seed', (req, res) => {
  /*  
  const objectsToSeed = [
    
    ]

  let questionsAdded = [];

  objectsToSeed.forEach(object => {
    Question.findOne({ question: object["question"] })
      .then(question => {
        if (question) {
          return;
        } else {
          let toInsert = new Question(object);

          toInsert.save()
            .then(question => questionsAdded.push(question));
        }
      });
  })

  res.json({msg: questionsAdded}); 
  */
})

router.get('/notseed', (req, res) => {
  res.json({ msg: "This is not the seed route"})
})

module.exports = router;