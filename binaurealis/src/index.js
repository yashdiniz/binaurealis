import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player';

function App() {
    return (
        <Player/>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)