import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.seconds,
            mins: 2,
            secs: 0,
            currentUser: this.props.currentUser
        }
        this.clock = setInterval( this.tick.bind(this), 1000);
    }

    tick() {
        let newTime = this.state.time - 1;
        let newMins = Math.floor( newTime / 60);
        let newSecs = newTime % 60;
        this.setState({
            time: newTime,
            mins: newMins,
            secs: newSecs
        })
        if (newTime < 0) {
            clearInterval(this.clock);
        }
    }


    render() {

        let mins = this.state.mins;
        let secs = (this.state.secs) > 9 ? (this.state.secs) : ("0" + this.state.secs); 
        let display = <div> {`${mins}:${secs}`} </div>;

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Clock;