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
            <div className="decor-row">
              <div className="corner"></div>
              <div className="top-border"></div>
              <div className="corner right-up"></div>
            </div>
            <div className="decor-row">
              <div className="left-border"></div>
              <div className="content">
                <div className="item-row">
                  <div className="name">
                    {place.get('name')}
                  </div>
                </div>
              </div>
              <div className="right-border"></div>
            </div>
            <div className="decor-row">
              <div className="corner left-bottom"></div>
              <div className="bottom-border"></div>
              <div className="corner right-bottom"></div>
            </div>
          </div>
        );
    }
}

export default Place;
