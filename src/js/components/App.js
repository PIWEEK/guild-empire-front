import React from 'react';
import immstruct from 'immstruct';
import Immutable from 'immutable';

import Guild from './Guild';
import GameZone from './GameZone';
import TurnResume from './TurnResume';
import {ImmutableProps} from '../utils';
import * as api from '../api';
import * as data from '../data';

@ImmutableProps
class App extends React.Component {
    render() {
        let turnResume = '';

        if (this.props.cursor.get('showResume')) {
            turnResume = <TurnResume />;
        }

        return (
           <div className="main-container">
                <Guild guild={this.props.cursor.getIn(['turn', 'guild', 'assets'])} musicOn={this.props.cursor.get('musicOn')} />
              <GameZone
                  activeMember={this.props.cursor.get('activeMember')}
                  activePlace={this.props.cursor.get('activePlace')}
                  turn={this.props.cursor.get('turn')} />
              {turnResume}
           </div>
        );
    }
}

function render() {
    let cursor = data.getNewCursor();
    React.render(<App cursor={cursor}/>, document.getElementById('root'));
}

var structure = data.getStructure();
structure.on('swap', function () {
    render();
});

export default function app() {
    api.getTurn().then(function(_data_) {
        _data_ = Immutable.fromJS(_data_);

        let cursor = data.getNewCursor();
        cursor.set('turn', _data_);
    });
}
