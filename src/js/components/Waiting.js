import React from 'react';

import {ImmutableProps} from '../utils';

@ImmutableProps
class Waiting extends React.Component {
    render() {
        return (
          <div className="waiting">
            <p>Waiting other players</p>
          </div>
        );
    }
}

export default Waiting;
