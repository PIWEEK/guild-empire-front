import {Action} from '../utils';

let boardActions = {
    selectMember: function(member) {
        this.cursor.set('activeMember', member);
    }
};

export default Action(boardActions);
