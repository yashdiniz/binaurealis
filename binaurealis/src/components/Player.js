import React, { Component } from 'react';

import AudioComponent from './AudioComponent';
import AudioComponentList from './AudioComponentList';
import { audioContext as context, audioContext }  from './AudioGraph';

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
    stopPlay() {
        audioContext.suspend(); // invoke in case of error
        this.setState({ isPlaying: false });
    }
    render() {
        return (
            <div>
                <button 
                    className="frui-btn frui-btn--primary frui-btn--large"
                    onClick={this.onPlay.bind(this)}
                >
                    {
                        this.state.isPlaying ? 
                        "Pause" : // <i class="fa fa-pause"/> : 
                        "Play" // <i class="fa fa-play"/>
                    }
                </button>
                <AudioComponentList stopPlay={this.stopPlay.bind(this)}>
                    <AudioComponent 
                        key={0} gain={0.3} frequency={120} offset={30}
                        stopPlay={this.stopPlay.bind(this)}
                    />,
                    <AudioComponent 
                        key={1} gain={0.2} frequency={440} offset={-20}
                        stopPlay={this.stopPlay.bind(this)}
                    />
                </AudioComponentList>
            </div>);
    }
}

export default Player;