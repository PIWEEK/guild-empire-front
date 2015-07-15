import Promise from 'bluebird';
import * as api from './api';
import * as utils from './utils';
import * as data from './data';
import commonActions from './actions/common.actions';

var id = {};

let gameEngine = {
    create: function() {
        return api.createGame();
    },
    getGame: function() {
        return gameEngine.create();
    },
    init: function() {
        return new Promise(function(resolve, reject){
            let game = utils.getSearchParameter('game');
            let guild = utils.getSearchParameter('guild');

            if (!game || !guild) {
                let msg = `
                get your player id http://localhost:5000/api/v1/create_game.
                then http://localhost:8080/?game=9d8d7990-509e-4757-b9ee-b759a0419d2c&guild=malatesta
                `;

                reject(new Error(msg));
            } else {
                commonActions.setGame(game, guild);

                resolve();
            }
        });
    },
    getTurn: function() {
        let options = {};
        let obj = data.getCursor().deref();

        options.game = obj.getIn(['gameInfo', 'game']);
        options.guild = obj.getIn(['gameInfo', 'guild']);

        return api.getTurn(options);
    }
};

export default gameEngine;
