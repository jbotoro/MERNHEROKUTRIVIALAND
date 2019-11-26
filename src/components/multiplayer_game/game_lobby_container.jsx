import { connect } from 'react-redux';
import * as GameAction from '../../actions/game_actions';
import * as GameUtil from '../../util/game_util';
import { emitSetup, onSetup } from '../../util/socket_util';
import GameLobby from './game_lobby';
import { receiveSocket, removeSocket } from '../../actions/socket_action';

const msp = (state, ownProps) => {
    let game = state.entities.game;
    let currentUser = state.session.user;
    // let socket = state.entities.socket;
    return {
        currentUser: currentUser,
        game: game,
        state: state
        // socket: socket
    }
    
}   

const mdp = (dispatch) => {
        // all the commented out functions are thunk actions,
        // startgame and updateRoomScore actions sent to the reducers to 
        // optimize speed, remove player, endGame, and addPlayer are the only 
        // thunk functions as of the moment, may change logic if speed is really,
        // hindered
    return {
        // startGame: (gameId) => dispatch(GameAction.startNewGame(gameId)),
        // updateScore: (gameId) => dispatch(GameAction.updateScore(gameId)),
        
        addPlayer: (gameId) => dispatch(GameAction.addPlayer(gameId)),
        removePlayer: (gameId) => dispatch(GameAction.removePlayer(gameId)),
        endGame: (gameId) => dispatch(GameAction.endCurrentGame(gameId)),

        // below regular action creators
        startGame: (game) => dispatch(GameAction.startGame(game)),
        updateRoomScore: (game) => dispatch(GameAction.updateRoomScore(game)),

        // socket actions to pass around socket, pass on to logout button as well so
        // that when logout, socket can erase
        receiveSocket: (socket) => dispatch(receiveSocket(socket)),
        removeSocket: (socket) => dispatch(removeSocket(socket)) ,

        emitSetup: (socket) => dispatch(emitSetup(socket)),
        onSetup: (socket) => dispatch(onSetup(socket))

        // util for the response and then utilize action object creator 
        // to send to store
    }
    
}

export default connect(msp, mdp)(GameLobby);