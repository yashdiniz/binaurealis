import React, { Component } from 'react';
import { AudioGraph } from './AudioGraph';

class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gain: this.props.gain,
            frequency: this.props.frequency,
            offset: this.props.offset,
            context: new AudioGraph()
        };
        this.state.context.updateOscillators(this.props.frequency, this.props.offset);    // default
        this.state.context.changeGain(this.props.gain);    // default
    }
    updateOscillators() {
        this.state.context.updateOscillators(this.state.frequency, this.state.offset);
    }
    changeFrequency(event) {
        this.setState({ frequency: event.target.value }, this.updateOscillators);
    }
    changeOffset(event) {
        this.setState({ offset: event.target.value }, this.updateOscillators);
    }
    changeGain(event) {
        this.setState({ gain: event.target.value }, 
            () => this.state.context.changeGain(this.state.gain)
        );
    }
    render() {
        return (
        <div className="player">
            <label>Volume</label>
            <input 
                type="range" name="gain" 
                min="0" max="1"
                step="0.01" value={this.state.gain}
                onChange={this.changeGain.bind(this)}
            />
            <span>{this.state.gain}</span>
            <br/>
            <label>Base Frequency</label>
            <input
                type="number" name="frequency"
                min="20" max="20000"
                value={this.state.frequency}
                onChange={this.changeFrequency.bind(this)}
            />
            <br/>
            <label>Offset</label>
            <input 
                type="range" name="offset"
                min="-60" max="60" 
                step="1" value={this.state.offset}
                onChange={event => this.changeOffset(event)}
            />
            <span>{this.state.offset}</span>
        </div>)
    }
}

export default AudioComponent;