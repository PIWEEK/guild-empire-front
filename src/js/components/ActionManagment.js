import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';
import Place from './Place';
import Action from './Action';

@ImmutableProps
class ActionManagment extends React.Component {
    render() {
        let places = this.props.places;
        let freeActions = this.props.freeActions;
        let activePlace = this.props.activePlace;
        let selectedActions = this.props.selectedActions;

        let renderActions;
        let renderSelectedActions;

        if (activePlace) {
            renderActions = (
                <div className="column col-action">
                {activePlace.get('actions').map(function(action) {
                    return <Action key={action.get('slug')} action={action} />
                })}
                {freeActions.map(function(action) {
                    return <Action key={action.get('slug')} action={action} />
                })}
                </div>
            )
        }

        if (selectedActions.size) {
            renderSelectedActions = (
                <div className="column col-action">
                {selectedActions.map(function(action) {
                    return <Action key={action.get('slug')} action={action.get('action')} />
                })}
                </div>
            )
        }

        return (
          <div className="action-managment-wrapper">
            <div className="decor-action-managment"></div>
            <div className="action-managment-container">
              <div className="column">
              {places.map(function(place) {
                  return <Place key={place.get('slug')} place={place} />
              })}
              </div>
              {renderActions}
              {renderSelectedActions}
            </div>
            <div className="decor-action-managment"></div>
          </div>
        );
    }
}

export default ActionManagment;
