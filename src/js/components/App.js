import React from 'react';
import immstruct from 'immstruct';

import {Component} from '../utils';
import data from '../data';
import Guild from './Guild';

class App extends Component {
    render() {
        return (
           <div>
                <Guild />
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
