import React, {forwardRef, useRef, useImperativeHandle} from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.seconds,
            mins: 9,
            secs: 59,
            currentUser: this.props.currentUser
        }
        this.clock = setInterval( this.tick.bind(this), 1000);
        this.resetClock = this.resetClock.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.clock);
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
        if (newTime < -1) {
            clearInterval(this.clock);
        }
    }

    resetClock(newClock){
        let newSecs = newClock || 15;
        this.setState({
            mins:0,
            secs: newSecs,
            time: this.props.seconds
        })
    }


    render() {
        if (this.state.secs < 1 && this.state.mins < 1) this.resetClock();
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