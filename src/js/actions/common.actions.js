import {Action} from '../utils';

let commonActions = {
    openResume: function() {
        this.cursor.set('showResume', true);
    },
    closeResume: function() {
        this.cursor.set('showResume', false);
    },

    musicToggle: function() {
        let musicOn = this.cursor.get('musicOn');
        this.cursor.set('musicOn', !musicOn);
    }
};

export default Action(commonActions);
