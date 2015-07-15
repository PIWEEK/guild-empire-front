import {Action} from '../utils';
import Immutable from 'immutable';

let boardActions = {
    selectMember: function(member) {
        this.cursor.set('activeMember', member.deref());
    },
    selectPlace: function(place) {
        this.cursor.set('activePlace', place.deref());
    },
    addAction: function(selectedAction) {
        let actions = this.cursor.get('actions');

        let place = this.cursor.get('activePlace');
        let character = this.cursor.get('activeMember');

        let action = Immutable.Map();

        let slug = place.get('slug') + character.get('slug') + selectedAction.get('slug');

        action = action.set('slug', slug);
        action = action.set('action', selectedAction.deref());
        action = action.set('place', place);
        action = action.set('character', character);

        if (!actions.includes(action)) {
            actions.push(action);
        }
    }
};

export default Action(boardActions);
