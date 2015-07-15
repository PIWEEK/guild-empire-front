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
        musicOn = musicOn===undefined || musicOn===true?true:false;
        this.cursor.set('musicOn', !musicOn);
    }
};

export default Action(commonActions);
