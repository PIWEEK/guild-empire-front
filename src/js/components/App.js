import React from 'react';
import immstruct from 'immstruct';

import {Component} from '../utils';
import data from '../data';

class App extends Component {
    render() {
        return (
           <div>Init</div>
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
