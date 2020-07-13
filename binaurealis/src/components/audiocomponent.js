import React, { Component } from 'react';

class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gain: this.props.gain,
            frequency: this.props.frequency,
            offset: this.props.offset
        };
    }

    // todo: add states
    render() {
        return (
        <div className="player">
            <label for="gain">Volume</label>
            <input 
                type="range" name="gain" 
                min="0" max="1"
                step="0.01" value={this.state.gain}
                onChange={event => this.setState({ gain: event.target.value })}
            />
            <span>{this.state.gain}</span>
            <br/>
            <label for="frequency">Base Frequency</label>
            <input
                type="number" name="frequency"
                min="20" max="20000"
                value={this.state.frequency}
                onChange={event => this.setState({ frequency: event.target.value })}
            />
            <br/>
            <label for="offset">Offset</label>
            <input 
                type="range" name="offset"
                min="-50" max="50" 
                step="1" value={this.state.offset}
                onChange={event => this.setState({ offset: event.target.value })}
            />
            <span>{this.state.offset}</span>
        </div>)
    }
}

export default AudioComponent;