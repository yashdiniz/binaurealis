import React, { Component } from 'react';

import AudioComponent from './AudioComponent';
import { audioContext as context }  from './AudioGraph';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }
    onPlay() {
        this.setState({ isPlaying: !this.state.isPlaying },
            () => this.state.isPlaying ? context.resume() : context.suspend()
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.onPlay.bind(this)}>
                    {this.state.isPlaying ? "Pause" : "Play"}
                </button>
                <AudioComponent 
                    gain={0.5} frequency={120} offset={-30}
                />
            </div>);
    }
}

export default Player;