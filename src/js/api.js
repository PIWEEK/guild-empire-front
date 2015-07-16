import {ajax} from './utils';

let root = 'http://localhost:5000/api/v1/';

export function getTurn(params) {
    return ajax.get(root + 'turn', params);
}


export function createGame() {
    return ajax.get(root + 'create_game');
}

export function endTurn(params) {
    return ajax.post(root + 'turn', params);
}
