import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';
import boardActions from '../actions/board.actions';

@ImmutableProps
class Event extends React.Component {
    render() {
        const event = this.props.event;

        return (
                  <div className="row sub">
                      <div className="sub-decor"></div>
                      <div className="image-cont">
                         <div className="condition-item bad">
                            <Isvg src="/images/conditions/broken-bone.svg" />
                          </div>
                      </div>
                      <div className="text">
                          {event.get('message')}
                      </div>
                 </div>
        );
    }
}

export default Event;
