import store from 'store';
import Promise from 'bluebird';
import * as api from './api';

let gameEngine = {
    setGame: function(game) {
        //return store.set('game', game);
    },
    hasGame: function() {
        return store.get('game');
    },
    create: function() {
        return api.createGame().then(function(game) {
            gameEngine.setGame(game);

            return game;
        });
    },
    getGame: function() {
        return new Promise(function(resolve) {
            if (!gameEngine.hasGame()) {
                gameEngine.create().then(resolve);
            } else {
                let game = store.get('game');
                resolve(game);
            }
        });
    },
    getTurn: function () {
        return gameEngine.getGame()
            .then(function(game) {
                let options = {};
                options.game = game.game;
                options.guild = game.guilds[0];

                return api.getTurn(options);
            });
    }
};

export default gameEngine;
