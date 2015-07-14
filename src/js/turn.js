import {ajax} from './utils';

export default function getTurn() {
    return ajax.get('http://localhost:5000/api/v1/turn');
}
