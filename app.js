const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

//Express app for routes
const app = express();


//sockets
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const server = http.createServer(app);

const GameState = require('./models/Game');

//end of socket variables

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


//Wesocket Details Below
const io = socketIO(server);

io.on('connection', socket => {
  console.log('User connected');

  socket.room = socket.handshake.query.room;
  socket.join(socket.room);

  socket.on('join room', (room) => {
    console.log('joined new room')
    socket.leave(socket.room);
    socket.room = room;
    socket.join(socket.room);
    socket.to(socket.room).emit('room change', socket.room);
  })

  // socket.on('From Client Input', (Input) => {
  //   // console.log(GameState);
  //   socket.to(socket.room).emit('From Client Input', Input);
  // })
  // socket.on('From Host GameState', (GameState) => {
  //   // console.log(GameState);
  //   socket.to(socket.room).emit('From Host GameState', GameState);
  //   // GameState.save().then(() => {
  //   //   socket.to(socket.room).emit('receive gameState', receivedState);
  //   // // })
  // })

  // socket.on('disconnect', () => {
  //   // console.log('user disconnected');
  //   socket.leave(socket.room);
  // });

})


// server.listen(port);