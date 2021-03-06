import {Action, sleep} from '../utils';
import * as api from '../api';
import Immutable from 'immutable';
import Promise from 'bluebird';
import _ from 'lodash';
import gameEngine from '../gameEngine';
import * as data from '../data';

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
    nextTurn: function() {
        return new Promise((resolve) => {
            gameEngine.getTurn().then(async function(data) {
                if (!data.pending) {
                    resolve(data);
                } else {
                    await sleep(1000);
                    let turn = await this.nextTurn();
                    resolve(turn);
                }
            }.bind(this));
        });
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

        let gameInfo = this.cursor.get('gameInfo').deref();

        api.endTurn(gameInfo, myturn)
            .then(() => this.nextTurn())
            .then((turn) => {
                turn = Immutable.fromJS(turn);
                let cursor = data.getNewCursor();
                cursor.set('actions', Immutable.List());
                cursor.set('turn', turn);

                cursor.set('waiting', false);
                cursor.set('showResume', true);
            });
    },
    musicToggle: function() {
        let musicOn = this.cursor.get('musicOn');
        this.cursor.set('musicOn', !musicOn);
    }
};

let action = Action(commonActions);

export default action;
