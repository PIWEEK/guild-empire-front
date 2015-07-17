import React from 'react';

import {ImmutableProps, parseCondition} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class Event extends React.Component {
    render() {
        const event = this.props.event;

        const conditionGained = event.get('condition_gained');
        const conditionLost = event.get('condition_lost');

        let conditionAfterMath = '';
        let conditionIcon = '';

        if (conditionGained) {
            conditionIcon = parseCondition(conditionGained);
            if (conditionIcon) {
                conditionIcon = conditionIcon[1];
            }
            conditionAfterMath = 'good';
        } else if (conditionLost) {
            conditionIcon = parseCondition(conditionLost);
            if (conditionIcon) {
                conditionIcon = conditionIcon[1];
            }
            conditionAfterMath = 'bad';
        }

        return (
                  <div className="row sub">
                      <div className="sub-decor"></div>
                         <div className="image-cont">

                         <div className={`condition-item ${conditionAfterMath}`}>
                            <Isvg src={`/images/conditions/${conditionIcon}.svg`} />
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
