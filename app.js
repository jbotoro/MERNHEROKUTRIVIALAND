const express = require("express");
const path = require("path");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

const users = require("./routes/api/users");
const games = require("./routes/api/games");
const gameStats = require("./routes/api/gameStats");
const questions = require("./routes/api/questions");
const currentGameQuestions = require("./routes/api/currentGameQuestions");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/gameStats", gameStats);
app.use("/api/questions", questions);
app.use("/api/currentGameQuestions", currentGameQuestions);

// Socket.io

// currentUsers = [];

// const http = require("http").Server(app);
// const io = require("socket.io")(http);

// io.on("connection", function(socket) {
//   console.log("a user connected");
//   // console.log(socket);
//   socket.on("disconnect", function() {
//     console.log("User Disconnected");
//   });

//   socket.on("testing", function(msg) {
//     console.log("message: " + JSON.stringify(msg));
//     socket.emit("echo", msg);
//   });

//   socket.join("my_room");
//   io.to("my_room").emit("echo", "mfing");

//   socket.on("join_a_room", function(msg) {
//     // socket.emit("echo", msg);
//     socket.join(msg.roomID);
//     currentUsers.push(gameState(msg.userInfo));
//   });
// });

// http.listen(port);

//Wesocket Details Below

const http = require("http").Server(app);
const io = require("socket.io")(http);

// const server = http.createServer(app);

// const io = socketIO(server);

const players = {};

io.on("connection", socket => {
  console.log("User connected");

  // socket.room = socket.handshake.query.room;
  // socket.join(socket.room);

  socket.on("join room", room => {
    console.log("ROOM ID RECIEVED FROM CLIENT SIDE: ", room);
    console.log("server side socket room before reassingment", socket.room);
    console.log("joined new room");
    // socket.leave(socket.room);
    socket.room = room;
    socket.join(room);
    console.log("SOCKET.JOIN(ROOM)", socket.room);
    console.log("-----------THIS IS IO IN BACKEND ---------------", io);
    let roster = io.sockets.adapter.rooms[room];

    socket.to(room).emit("added player", { roster, room });
  });

  socket.on("start game", room => {
    console.log("WHAT ROOM LOOKS LIKE IN BACKEND @ START GAME: ", room);
    // socket.to(room).emit("game started", room);

    io.to(room).emit("game started", room);

    // socket.to(room).emit("startTest", room);
  });

  socket.on("testing", function(msg) {
    console.log("message: " + JSON.stringify(msg));
    socket.emit("echo", msg);
  });

  socket.on("profile page join", data => {
    console.log("profile message: " + JSON.stringify(data));
    socket.emit("profile page join", data);
  });

  socket.on("update score", ({ room, player, idx }) => {
    console.log("IN THIS MOTHA UPDATE SCORE", idx, player);
    io.to(room).emit("updated score", { player, idx });
  });

  socket.on("disconnect", ({ room, game }) => {
    console.log("user disconnected");
    // socket.to(room).emit("disconnect", {});
    // socket.leave(socket.room);
    // socket.to(room).emit("remove player", { room, game });
  });

  // want to add some logic that communicates with the models of game
  // and checks if a certain room with that particular game model has
  // no more players, then use delete route on api routes to remove
  // that game model from database

  // socket.on("remove player", ({ room, player }) => {
  //   socket.to(room).emit("remove player", { room, player });
  // });

  // socket.on("add player", ({ room, player }) => {
  //   socket.to(room).emit("add player", { room, player });
  // });

  socket.on("update score", ({ room, game }) => {
    socket.to(room).emit("update score", { room, game });
  });

  // socket.on("From Client Input", Input => {
  //   // console.log(GameState);
  //   socket.to(socket.room).emit("From Client Input", Input);
  // });

  // socket.on("From Host GameState", GameState => {
  //   // console.log(GameState);
  //   socket.to(socket.room).emit("From Host GameState", GameState);
  //   // GameState.save().then(() => {
  //   //   socket.to(socket.room).emit('receive gameState', receivedState);
  //   // // })
  // });
});

http.listen(port);

// server.listen(port);
