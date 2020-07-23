import React, { Component } from 'react';

class AudioComponentList extends Component {
    constructor(props) {
        super(props);
        // storing children as state to facilitate adding new components.
        this.state = {
            children: this.props.children
        };
    }
    
    addAudioComponent(e){

    }

    // TODO: work on add new AudioComponent button stub!
    render() {
        return (
            <>
            {this.state.children}
            <button
                className="frui-btn frui-btn--fab"
                onClick={this.addAudioComponent.bind(this)}
            >+</button>
            </>
        );
    }
}

export default AudioComponentList;