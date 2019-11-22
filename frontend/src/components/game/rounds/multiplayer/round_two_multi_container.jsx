import { connect } from "react-redux";
//import Profile from './profile';
import RoundTwo from "./round_two_multi";
import { updateRnd2GameStat } from "../../../../actions/game_actions";

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
  let opponentIndex = myIndex === 1 ? 0 : currentPlayers.length < 2 ? -1 : 1;
  let socket = ownProps.socket;

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
    updateRnd2GameStat: data => dispatch(updateRnd2GameStat(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundTwo);
