import React from 'react';

import {ImmutableProps} from '../utils';
import boardActions from '../actions/board.actions';

import Isvg from 'react-inlinesvg';

@ImmutableProps
class Place extends React.Component {
    selectPlace() {
        boardActions.selectPlace(this.props.place);
    }
    render() {
        let place = this.props.place;

        return (
          <div onClick={this.selectPlace.bind(this)} className="col-item place">
            <div className="item-row">
              <div className="icon">
                <Isvg src="/images/stats/constitution.svg" />
              </div>
              <div className="name">
                {place.get('name')}
              </div>
              <div className="turns">
                <div className="icon">
                  <Isvg src="/images/stats/constitution.svg" />
                </div>
                <div className="text">1 - 5</div>
              </div>
            </div>
          </div>
        );
    }
}

export default Place;
