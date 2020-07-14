import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AudioComponent from './components/audiocomponent';
import { audioContext as context }  from './components/audioGraph';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }
    onPlay(event) {
        this.setState({ isPlaying: !this.state.isPlaying },
            () => this.state.isPlaying ? context.resume() : context.suspend()
        );
    }
    render() {
        return (
            <div>
                <button onClick={e => this.onPlay(e) }>
                    {this.state.isPlaying ? "Pause" : "Play"}
                </button>
                <AudioComponent 
                    gain={0.5} frequency={120} offset={-30}
                />
            </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)