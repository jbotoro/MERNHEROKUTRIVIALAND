const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const app = express();
const db = require('./config/keys').mongoURI;

//sockets
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const server = http.createServer(app)

//end of socket variables

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

const users = require("./routes/api/users");
const games = require("./routes/api/games");
const gameStats = require("./routes/api/gameStats");
const questions = require("./routes/api/questions");

app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/gameStats", gameStats);
app.use("/api/questions", questions);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
