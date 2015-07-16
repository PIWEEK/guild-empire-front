import React from 'react';
import Isvg from 'react-inlinesvg';
import {ImmutableProps} from '../utils';

@ImmutableProps
class Waiting extends React.Component {
    render() {
        return (
          <div className="waiting">
            <div className="container">
              <div className="image">
                  <Isvg src="/images/machine.svg" />
              </div>
              <div className="text">
                <h1>Waiting for your oponents to end their turn</h1>
                <p>Come back in a while...</p>
              </div>

            </div>
          </div>
        );
    }
}

export default Waiting;
