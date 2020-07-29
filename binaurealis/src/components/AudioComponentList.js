import React, { Component } from 'react';
import AudioComponent from './AudioComponent';

class AudioComponentList extends Component {
    constructor(props) {
        super(props);
        // storing children as state to facilitate adding new components.
        this.state = {
            children: this.props.children
        };
    }

    addAudioComponent(){
        const list = [].concat(this.state.children);
        list.push(
            <AudioComponent 
                key={list.length} gain={0.1} frequency={880} offset={-5}
                stopPlay={this.props.stopPlay.bind(this)}
            />
        );
        this.setState({children: list}); 
    }

    // TODO: work on add new AudioComponent button stub!
    render() {
        return (
            <>
                {this.state.children}
                <button
                    className="frui-btn frui-btn--fab"
                    onClick={this.addAudioComponent.bind(this)}
                >Add</button>
            </>
        );
    }
}

export default AudioComponentList;