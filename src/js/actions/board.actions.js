import {Action} from '../utils';
import Immutable from 'immutable';

let boardActions = {
    selectMember: function(member) {
        this.cursor.set('activeMember', member.deref());
    },
    selectPlace: function(place) {
        place = place.deref();

        if (place.get('slug') !== this.cursor.getIn(['bg', 'current'])) {
            let bg = Immutable.fromJS({
                current: place.get('slug'),
                old: this.cursor.getIn(['bg', 'current'])
            });

            this.cursor.set('bg', bg);
            this.cursor.set('activePlace', place);
        }
    },
    addAction: function(selectedAction) {
        let actions = this.cursor.get('actions');

        let place = this.cursor.get('activePlace');
        let character = this.cursor.get('activeMember');

        let selectedActions = actions.deref().filter((action) => {
            return action.getIn(['character', 'slug']) === character.get('slug');
        });

        if (selectedActions.size === 8) return;

        let action = Immutable.Map();

        let slug = actions.size;

        action = action.set('slug', slug);
        action = action.set('action', selectedAction.deref());
        action = action.set('place', place);
        action = action.set('character', character);

        actions.push(action);
    },
    removeAction: function(action) {
        let actions = this.cursor.get('actions').deref();
        let slug = action.get('slug');

        actions = actions.filter((a) => a.get('slug') !== slug);

        this.cursor.set('actions', actions);
    }
};

export default Action(boardActions);
