import {ajax} from './utils';

let root = 'http://localhost:5000/api/v1/';

export function getTurn() {
    return ajax.get(root + 'turn');
}
