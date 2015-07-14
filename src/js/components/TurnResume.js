import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';

@ImmutableProps
class GameZone extends React.Component {
    close() {
        commonActions.closeResume();
    }
    render() {
        return (
          <div className="turn-resume">
            <p>turn resume</p>
            <p onClick={this.close}>Close</p>
          </div>
        );
    }
}

export default GameZone;
