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


        let actions;

        if (activePlace) {
            actions = activePlace.get('actions').map(function(action) {
                return <Action action={action} />
            })
        }

        return (
          <div className="action-managment-container">
            <div className="column">
            {places.map(function(place) {
                return <Place place={place} />
            })}
            </div>

            <div className="column col-action">
            {freeActions.map(function(action) {
                return <Action action={action} />
            })}
            {actions}
            </div>
          </div>
        );
    }
}

export default ActionManagment;
