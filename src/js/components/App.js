import React from 'react';
import immstruct from 'immstruct';

import data from '../data';
import Guild from './Guild';
import GameZone from './GameZone'
import {ImmutableProps} from '../utils';

@ImmutableProps
class App extends React.Component {
    render() {
        return (
           <div className="main-container">
              <Guild />
              <GameZone />
           </div>
        );
    }
}

var structure = immstruct(data);

function render() {
    React.render(<App cursor={structure.cursor()}/>, document.getElementById('root'));
}

structure.on('swap', function () {
    render();
});

export default function app() {
    render();
}
