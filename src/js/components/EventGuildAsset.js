import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class EventGuildAsset extends React.Component {
    render() {
        const eventGuildAsset = this.props.eventGuildAsset;

        console.log("eventGuildAsset >>>>>");
        console.log(eventGuildAsset);

        return (
          <div className="asset gold">
            <div className="image">
                <Isvg src={`/images/currency/${eventGuildAsset}.svg`} />
            </div>
            <div className="text">
              <span className="ammount">+100</span>
            </div>
          </div>
        );
    }
}

export default EventGuildAsset;
