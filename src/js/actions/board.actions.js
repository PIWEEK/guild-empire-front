import {Action} from '../utils';

let boardActions = {
    selectMember: function(member) {
        this.cursor.set('activeMember', member);
    },
    selectPlace: function(place) {
        this.cursor.set('activePlace', place);
    }
};

export default Action(boardActions);
