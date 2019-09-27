import generateRound1Board from './board_1';

class Game {
    constructor(user, multiplayer = false, numberPlayers, questions) {
        this.user = user;
        this.round = 1;
        // this.multiplayer = multiplayer;
        this.numberPlayers = numberPlayers;
        this.questions = questions;
        this.win = false;
        this.round1threshold = 2500; // no. of points needed to pass
        this.proceedToRound2 = false;
        this.proceedToRound3 = false;
        this.score = 0;

        // this.score =  user => (
        //     {
        //         id: user.id,
        //         username: user.username,
        //         score: 0
        // });
    }

    winRound1(user, otherUsers = null) {
        if (this.numberPlayers === 1) {
            this.proceedToRound2 = true;
        } else {}
    }

    points(condition, points) {
        if ( difficulty === "easy") {
            if ( condition === true ) {
                this.score.score += points;
            } else if (condition === false) {
                if ( this.score.score - points < 0) {
                    this.score.score = 0;
                } else {
                    this.score.score -= points;
                }
            }
        } else if (difficulty === "medium") {
            if (condition === true) {
                this.score.score += 100;
            } else if (condition === false) {
                if (this.score.score - 100 < 0) {
                    this.score.score = 0;
                } else {
                    this.score.score -= 100;
                }
            }
        }
    }

    progressNextRound() {
        if (this.round !== 3) {

        }
    }
    

}

