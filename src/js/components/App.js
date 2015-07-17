import React from 'react';
import immstruct from 'immstruct';
import Immutable from 'immutable';
import Isvg from 'react-inlinesvg';
import Guild from './Guild';
import GameZone from './GameZone';
import TurnResume from './TurnResume';
import Waiting from './Waiting';
import {ImmutableProps, guildColor} from '../utils';
import * as data from '../data';
import gameEngine from '../gameEngine';
import classNames from 'classnames';

@ImmutableProps
class App extends React.Component {
    render() {
        let turnResume = '';

        if (this.props.cursor.get('showResume')) {
             turnResume = <TurnResume lastTurn={this.props.cursor.getIn(['turn', 'last_turn'])} />;
        }

        let waiting = '';
        if (this.props.cursor.get('waiting')) {
            waiting = <Waiting />;
        }

        let guildName = this.props.cursor.getIn(['gameInfo', 'guild']);

        let color = guildColor(guildName);

        let guildClasses = {
            'main-container': true
        };

        guildClasses[color] = true;

        guildClasses = classNames(guildClasses);

        return (
           <div className={guildClasses}>
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
