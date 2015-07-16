import {Action} from '../utils';
import * as api from '../api';
import Immutable from 'immutable';
import _ from 'lodash';

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
    endTurn: function() {
        let turnActions = this.cursor.get('actions').toJS();

        let characterActions = _.groupBy(turnActions, (action) => {
            return action.character.slug;
        });

        let myturn = [];

        _.forIn(characterActions, (character, key) => {
            let actions = character.map((action) => {
                return {
                    place: action.place.slug,
                    action: action.action.slug
                };
            });

            myturn.push({
                slug: key,
                actions: actions
            });
        });

        this.cursor.set('waiting', true);

        api.endTurn(myturn).then(() => {
            this.cursor.set('waiting', false);
        });
    },
    musicToggle: function() {
        let musicOn = this.cursor.get('musicOn');
        this.cursor.set('musicOn', !musicOn);
    }
};

let action = Action(commonActions);

export default action;
