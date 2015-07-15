import {Action} from '../utils';
import Immutable from 'immutable';

let commonActions = {
    openResume: function() {
        this.cursor.set('showResume', true);
    },
    closeResume: function() {
        this.cursor.set('showResume', false);
    },
    setGame: function(game, guild) {
        let gameInfo = Immutable.fromJS({
            game: game,
            guild: guild
        });

        this.cursor.set('gameInfo', gameInfo);
    },
    musicToggle: function() {
        let musicOn = this.cursor.get('musicOn');
        this.cursor.set('musicOn', !musicOn);
    }
};

let action = Action(commonActions);

export default action;
