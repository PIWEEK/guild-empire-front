import React from 'react';
import immstruct from 'immstruct';
import Immutable from 'immutable';

import Guild from './Guild';
import GameZone from './GameZone';
import TurnResume from './TurnResume';
import Waiting from './Waiting';
import {ImmutableProps} from '../utils';
import * as data from '../data';
import gameEngine from '../gameEngine';

@ImmutableProps
class App extends React.Component {
    render() {
        let turnResume = '';
         if (this.props.cursor.get('showResume')) {
            turnResume = <TurnResume />;
        }

        let waiting = '';
        if (this.props.cursor.get('waiting')) {
            waiting = <Waiting />;
        }

        let guildName = this.props.cursor.getIn(['gameInfo', 'guild']);

        return (
           <div className="main-container guild-green">
              <Guild
                  guildName={guildName}
                  guild={this.props.cursor.getIn(['turn', 'guild'])}
                  musicOn={this.props.cursor.get('musicOn')} />
              <GameZone
                  bg={this.props.cursor.get('bg')}
                  selectedActions={this.props.cursor.get('actions')}
                  activeMember={this.props.cursor.get('activeMember')}
                  activePlace={this.props.cursor.get('activePlace')}
                  turn={this.props.cursor.get('turn')} />
              {turnResume}
              {waiting}
           </div>
        );
    }
}

function render() {
    let cursor = data.getNewCursor();

    if (cursor.get('turn')) {
        React.render(<App cursor={cursor}/>, document.getElementById('root'));
    }
}

var structure = data.getStructure();
structure.on('swap', function () {
    render();
});

export default function app() {
    gameEngine
        .init()
        .then(() => gameEngine.getTurn())
        .then(function(turn) {
            turn = Immutable.fromJS(turn);

            let cursor = data.getNewCursor();
            let activeMember = turn.getIn(['guild', 'members']).get(0);

            cursor.set('turn', turn);
            cursor.set('activeMember', activeMember);
        });
}
