import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class EventGuildAsset extends React.Component {
    render() {
        const currency = this.props.currency;
        const value = this.props.value;
        let sign = '';
        if (value>0) sign='+';

        return (
          <div className="asset gold">
            <div className="image">
                <Isvg src={`/images/currency/${currency}.svg`} />
            </div>
            <div className="text">
                <span className="ammount">{sign}{value}</span>
            </div>
          </div>
        );
    }
}

export default EventGuildAsset;
