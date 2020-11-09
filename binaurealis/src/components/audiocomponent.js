import React, { Component } from 'react';
import { AudioGraph } from './AudioGraph';

class AudioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gain: this.props.gain,
            frequency: this.props.frequency,
            offset: this.props.offset,
            context: new AudioGraph()   // couldn't use this.context
        };
        this.state.context.updateOscillators(this.props.frequency, this.props.offset);    // default
        this.state.context.changeGain(this.props.gain);    // default
    }
    // make sure the audio is initiated only by user action
    // i.e. suspend audio when a new component is mounted,
    // so that it starts ONLY when user presses play!
    componentDidMount() { this.props.stopPlay() }
    componentWillUnmount() { this.props.stopPlay() }
    updateOscillators() {
        try {
            this.state.context.updateOscillators(this.state.frequency, this.state.offset);
        } catch(e) {
            this.props.stopPlay()
        }
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
        <div className="player frui-panel"
        style={{
            'display': 'flex',
            'justifyContent':'space-evenly',
            'minWidth': '600px'
        }}
        >
            <div style={{'padding':'20px'}}>
            <label>
                Volume: {this.state.gain}
            </label>
            <br/>
            <input 
                type="range"
                min="0" max="1"
                style={{'margin': '5px'}}
                step="0.01" value={this.state.gain}
                onChange={this.changeGain.bind(this)}
            />
            <br/>
            </div>
            <div style={{'padding':'20px'}}>
            <label>
                Base Frequency
            </label>
            <br/>
            <input
                type="number"
                min="20" max="20000"
                style={{'margin': '5px'}}
                value={this.state.frequency}
                onChange={this.changeFrequency.bind(this)}
            />
            </div>
            <div style={{'padding':'20px'}}>
            <label>
                Offset: {this.state.offset}
            </label>
            <br/>
            <input 
                type="range"
                min="-60" max="60" 
                 style={{'margin': '5px'}}
                step="1" value={this.state.offset}
                onChange={event => this.changeOffset(event)}
            />
            </div>
        </div>)
    }
}

export default AudioComponent;