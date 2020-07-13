import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AudioComponent from './components/audiocomponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }
    onPlayPress(event) {
        
        this.setState({ isPlaying: !this.state.isPlaying });
    }
    render() {
        return (
            <div>
                <button onClick={e => this.onPlayPress(e) }>
                    {this.state.isPlaying ? "Pause" : "Play"}
                </button>
                <AudioComponent gain={0.5} frequency={120} offset={-30} />
            </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)