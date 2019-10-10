# Trivialand

_A multi-player online trivia game._

[TraviaLand Live](https://trivialand-app.herokuapp.com/ "Checkoff")
***
## Background and Overview
***


Trivialand is a minimal viable product that aims to leverage the increasing gamification of online experiences while at the same time addressing engineering challenges with real time gaming. These are challenges can be broken down in three categories


- Realtime: Scaling horizontally to allow large numbers of users to log in simulataneously while not compromising connection quality.

- Seamless: Users can interact on multiple platforms with almost an exact experience.

- Persistant: Using MongoDB and Passport integration to allow users to track previous performance and create new and personalized experiences for each user.



Trivialand is primarily built with the MERN stack, a combination of following four technologies: MongoDB, Express, React, and Node.


***
## Functionality & MVP
***

- [ ] Users will be able to log in securely 
- [ ] Persistent players stats stored in DB
- [ ] Live chat in game and in lobby
- [ ] Realtime gameplay with timed rounds and multiplayer action
- [ ] Game persistance across devices with live updated scores and gameboard view
- [ ] Single player option for individual gameplay
- [ ] Questions will be pulled from a trivia API


### Bonus Features

- [ ] Tie Breakers
- [ ] Full three rounds
- [ ] Post score to FB or Twitter
- [ ] High Scores (different types: rounds, whole game, fastest win)
- [ ] Unlockeable asthetic features based on performance

***
## Technologies & Challenges
***

### Architecture

Trivialand is built using the MERN stack (MongoDB, Express, React, and Node). It features creative use of websockets, multiple api's and css graphics in conjunction with client side rendering with React.

The overall architecture is summarized in the diagram below:

![Splash](./docs/mern.png)

#### Backend: Node, Express, MongoDB

On the backend we will be using MongoDB Atlas Cluster to house our data. The backend routes will be managed by Express and Node.

Trivialand will only have two models.
- A User's model which tracks an individual players personal stats, username, and ranking.
- A game model wich tracks a myriad of statistical facts regarding levels, players, and scores.

#### Frontend: React and React Native with Redux

- Clearly defined media queries to ensure performant user experiences across multiple platforms.

- By building mobile first we can guarantee that all user experiences will be synchronous, optimized, and uniform.

### Realtime Communication
- Websockets will be incorpored with our app to implement real-time gameplay between our users. 

- Our server will be listening for incoming connections and will establish a connection between clients through the WebSocket handshake when a request is made by a client.

- Our server will manage upstream and downstream information flow regarding gamestate, scores, player performance, and rank.

- We will be managing real-time display of changes by processing information from the upstream and downstream communications between our server and the clients.

***
## UI/UX
***

The goal is to create a unique player experience that is intuitive to use and quick to pick up. Game rounds will be relatively short with a portion of the players moving to the next round. Pages will be extremely self explanatory.

The app will have splash page with a sign up and login. Once logged in players can either create lobby or join using a unique key. Also players can see live lobbies. Players can watch any ongoing game, without being able to join. The users show page contains details regarding their stats and potential unlocks. Lobby leaderboard to see other indivual stats to measure against.

**The game constist of three rounds**
- **Round 1**: Lightning round in which player answer as many questions as possibly in the time alotted (default 2:00 minutes). The top 2/3 of players will move on to the second round with their current point totals.

- **Round 2**: A heads up elimation round with at most 3 players (for odd number occurences) where players choose the level of difficulty of each question for different amounts of points. The first player to answer three correct questions moves on to the third with their current points total. Or, if one of the players hits or goes below 0 points, the other player automatically moves on. Each player will have 5 seconds to choose a difficulty with random selection if player does not choose. The player then gets 15 seconds to answer their question after choosing a level of difficulty.

- **Round 3**: The final round. All players will go in order of rank (highest points first). The next player chooses their category until all players have chosen their final question category. Once all categories have been chosen, each player has ten seconds to wager up to their full amount of points. After ten seconds the final quesion will be revealed, and the players will have 20 seconds to choose their right answers. New scores will be tallied and the winner will be announced, with a second place. 




## Group Members & Work Breakdown

**Aaron Shapiro**,
**Kevin Moch**,
**Jordan Black**,
**Benjamin Rawner**

## Attribution

