import React from 'react';
import { withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class MultiplayerOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameId: "",
        };

        this.handleJoinInput = this.handleJoinInput.bind(this);
        this.handleJoinGame = this.handleJoinGame.bind(this);
        this.handleCreateGame = this.handleCreateGame.bind(this);
        this.joinSocket = this.joinSocket.bind(this);   
    }

    componentWillReceiveProps(nextProps) {

        // compare old props with next Rpors

        // setstate if nextProps have been updated

        // ( this.props === nextProps )

    }

    joinSocket(room) {
        // this.room;

        let socket;
        if (process.env.NODE_ENV === 'development') {
            socket = socketIOClient('localhost:5000');
        } else {
            socket = socketIOClient(window.location);
        }
        let currentUser = this.props.currentUser;
        // socket.room = room;
        // create action that stores current socket in state and 
        // invoke here
        this.props.receiveSocket(socket);
        let currentGameState = this.props.currentGame;
        socket.emit("join room", ({ room, currentGameState }));
    }
    
    handleJoinInput (e) {
        return e => (this.setState({
            gameId: e.target.value
        }))
    }
    
    handleJoinGame (e) {
        let gameId = this.state.gameId;
        this.props.addPlayer(gameId)
          .then( () => {
            //   this.joinSocket(gameId);
              this.props.history.push(`/game/${gameId}/lobby`);
            });
    }
    
    handleCreateGame () {
        let newGameInput = { 
                        creator: this.props.state.session.user.id,
                        isOnePlayerGame: true
                    };

        this.props.generateGame(newGameInput)
          .then( () => {
            //   this.joinSocket(this.props.currentGame.id);
              this.props.history.push(`/game/${this.props.currentGame.data._id}/lobby`);} );
            
    }
    
    render() {

        return (
            <div>
                <form onSubmit={this.handleJoinGame}>
                    <input type="text" onChange={this.handleJoinInput}/>
                    <button onClick={this.handleJoinGame}>Join Game</button>
                </form>
                
                <button onClick={this.handleCreateGame}>Create Game</button>
            </div>
        )

    }

}

export default withRouter(MultiplayerOptions);