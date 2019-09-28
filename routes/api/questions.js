const express = require("express");
const router = express.Router();

const Question = require("../../models/Question");
const CATEGORIES = require("../../categoriesList");


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


// Route to retrieve questions from :num number of random categories only

router.get('/categories/:num', (req, res) => {

  let allQuestionsCategories = Object.keys(CATEGORIES);
    let num = req.params.num;
    let cats = [];

    for (let i = 0; i < num; i++) {
      let randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
      let randomCategory = allQuestionsCategories[randomCategoryIndex];

      while (cats.includes(randomCategory)) {
        randomCategoryIndex = Math.floor(Math.random() * allQuestionsCategories.length);
        randomCategory = allQuestionsCategories[randomCategoryIndex];
      }
      
      cats.push(randomCategory);
    }

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


// Routes for individual categories

router.get('/general', (req, res) => {
  Question.find({ category: "General" })
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

router.get('/science', (req, res) => {
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


// Route for removing HTML characters

router.get('/decode', (req, res) => {
  
  /*
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
      ['quot', '"'],
      ['ldquo', '"'],
      ['rdquo', '"'],
      ['lsquo', '\''],
      ['rsquo', '\''],
      ['eacute', 'e'],
      ['uuml', 'ü'],
      ['prime', '\''],
      ['Prime', '"'],
      ['iacute', 'i'],
      ['aacute', 'a'],
      ['Eacute', 'E']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
      text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
  }

  Question.find({category: "Mathematics"})
    .then(questions => {
      questions.forEach(question => {
        let id = question["_id"];
        let newQuestion = {};
        let newValue = decodeHTMLEntities(question["question"]);
        let newAnswer = decodeHTMLEntities(question["correctAnswer"]);
        newQuestion["question"] = newValue;
        newQuestion["correctAnswer"] = newAnswer;
        Question.updateOne({ _id: id }, newQuestion, (err, success) => {
          console.log(success);
          console.log(err);
        })
      })
  })
  
  */
})


// Seeding route

router.get('/seed', (req, res) => {

  /*
  const objectsToSeed = [];

  objectsToSeed.forEach(object => {
    Question.findOne({ question: object["question"] })
      .then(question => {
        if (question) {
          return;
        } else {
          let toInsert = new Question(object);
          toInsert.save();
        }
      });
  })

  res.json({msg: "Complete"});

  */
})

module.exports = router;