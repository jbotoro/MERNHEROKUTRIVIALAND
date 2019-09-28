
/// categoryName, the full name of category on Open Trivia Database, is also the
///   name of the category in our MongoDB database.

module.exports = {

  "General": {
    openTdbId: 9,
    categoryName: "General",
    routeGETName: "/routes/api/questions/general"
  },

  "Books": {              ///  Added 50 questions
    openTdbId: 10,
    categoryName: "Books",
    routeGETName: "/routes/api/questions/books"
  },

  "Film": {               ///  Added 50 questions
    openTdbId: 11,
    categoryName: "Film",
    routeGETName: "/routes/api/questions/film"
  },

  "Music": {
    openTdbId: 12,
    categoryName: "Music",
    routeGETName: "/routes/api/questions/music"
  },

  "Theatre": {            /// Maxxed out: 24 questions;
    openTdbId: 13,
    categoryName: "Theatre",   
    routeGETName: "/routes/api/questions/theatre"
  },

  "Television": {             /// Added 50 questions;
    openTdbId: 14,
    categoryName: "Television",
    routeGETName: "/routes/api/questions/television"
  },

  "Video_Games": {
    openTdbId: 15,
    categoryName: "Video_Games",
    routeGETName: "/routes/api/questions/videogames"
  },

  "Board_Games": {            // Added 50 seeds
    openTdbId: 16,
    categoryName: "Board_Games",
    routeGETName: "/routes/api/questions/boardgames"
  },

  "Science": {                /// Added 50 questions
    openTdbId: 17,
    categoryName: "Science",
    routeGETName: "/routes/api/questions/science"
  },

  "Computers": {              ///  Added 50 questions
    openTdbId: 18,
    categoryName: "Computers",
    routeGETName: "/routes/api/questions/computers"
  },

  "Mathematics": {              /// Maxxed out at 45 questions
    openTdbId: 19,
    categoryName: "Mathematics",
    routeGETName: "/routes/api/questions/math"
  },

  "Mythology": {                /// Added 40 questions
    openTdbId: 20,
    categoryName: "Mythology",
    routeGETName: "/routes/api/questions/mythology"
  },

  "Sports": {                   /// Added 50 questions
    openTdbId: 21,
    categoryName: "Sports",
    routeGETName: "/routes/api/questions/sports"
  },

  "Geography": {                /// Added 50 questions
    openTdbId: 22,
    categoryName: "Geography",
    routeGETName: "/routes/api/questions/geography"
  },

  "History": {
    openTdbId: 23,
    categoryName: "History",
    routeGETName: "/routes/api/questions/history"
  },

  "Politics": {                   // Added 50 questions
    openTdbId: 24,
    categoryName: "Politics",
    routeGETName: "/routes/api/questions/politics"
  },

  "Art": {                        // Maxed out at 24 questions
    openTdbId: 25,
    categoryName: "Art",
    routeGETName: "/routes/api/questions/art"
  },

  "Celebrities": {    ///  Maxxed out at 45 questions
    openTdbId: 26,
    categoryName: "Celebrities",
    routeGETName: "/routes/api/questions/celebrities"
  },

  "Animals": {      /// Added 50 questions
    openTdbId: 27,
    categoryName: "Animals",
    routeGETName: "/routes/api/questions/animals"
  },

  "Vehicles": {     /// Added 50 questions
    openTdbId: 28,
    categoryName: "Vehicles",
    routeGETName: "/routes/api/questions/vehicles"
  },

  "Comics": {     /// Maxxed out at 45 questions
    openTdbId: 29,
    categoryName: "Comics", 
    routeGETName: "/routes/api/questions/comics"
  },

  "Gadgets": {      /// Maxxed out at 21 questions
    openTdbId: 30,
    categoryName: "Gadgets",
    routeGETName: "/routes/api/questions/gadgets"
  },

  "Anime": {
    openTdbId: 31,
    categoryName: "Anime",
    routeGETName: "/routes/api/questions/anime"
  },

  "Cartoons": {             // added 50 questions
    openTdbId: 32,
    categoryName: "Cartoons",
    routeGETName: "/routes/api/questions/cartoons"
  }
}