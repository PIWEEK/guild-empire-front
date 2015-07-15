import Promise from 'bluebird';
import * as api from './api';
import * as utils from './utils';

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
            id.game = utils.getSearchParameter('game');
            id.guild = utils.getSearchParameter('guild');
            let create = utils.getSearchParameter('create');

            if (!id.game || !id.guild) {
                let msg = `
                get your player id http://localhost:5000/api/v1/create_game.
                then http://localhost:8080/?game=9d8d7990-509e-4757-b9ee-b759a0419d2c&guild=malatesta
                `;

                reject(new Error(msg));
            } else {
                resolve();
            }
        });
    },
    getTurn: function() {
        return gameEngine.getGame()
            .then(function(game) {
                let options = {};

                options.game = id.game;
                options.guild = id.guild;

                return api.getTurn(options);
            });
    }
};

export default gameEngine;
