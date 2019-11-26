import { connect } from "react-redux";
//import Profile from './profile';
import RoundTwo from "./round_two_multi";
import {
  updateRnd2GameStat,
  deleteRound2Rooms
} from "../../../../actions/game_actions";

const mapStateToProps = (state, ownProps) => {
  let round2RoomNum = ownProps.round2RoomNum;
  let currentPlayers = state.entities.game.data.round2Rooms[round2RoomNum].map(
    player => {
      player.rightAnswers = 0;
      player.strikes = 0;
      return player;
    }
  );
  //let currentScore = state.users

  let myIndex = currentPlayers.findIndex(player => {
    return player.username === state.session.user.username;
  });

  let opponentIndex = myIndex === 1 ? 0 : 1;
  let socket = ownProps.socket;

  if (currentPlayers.length < 2) {
    let ghostPlayer = {
      username: "Ghost",
      isActive: { currentScore: 0 },
      strikes: 0,
      rightAnswers: 0
    };
    currentPlayers.push(ghostPlayer);
  }

  return {
    currentUser: state.session.user,
    currentPlayers,
    myIndex,
    opponentIndex,
    socketRoom: state.entities.game.data.roomId,
    round2RoomNum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRnd2GameStat: data => dispatch(updateRnd2GameStat(data)),
    deleteRound2Rooms: room => dispatch(deleteRound2Rooms(room))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundTwo);
