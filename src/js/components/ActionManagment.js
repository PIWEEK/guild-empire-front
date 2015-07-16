import React from 'react';
import ReactCSSTransitionGroup from 'rc-css-transition-group';
import _ from 'lodash';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';
import Place from './Place';
import Action from './Action';
import boardActions from '../actions/board.actions';

@ImmutableProps
class ActionManagment extends React.Component {
    selectAction(action) {
        boardActions.addAction(action);
    }
    removeAction(action) {
        boardActions.removeAction(action);
    }
    render() {
        let places = this.props.places;
        let freeActions = this.props.freeActions;
        let activePlace = this.props.activePlace;
        let activeMember = this.props.activeMember;
        let selectedActions = this.props.selectedActions;

        selectedActions = selectedActions.deref().filter((action) => {
            return action.getIn(['character', 'slug']) === activeMember.get('slug');
        });

        let renderActions;
        let renderSelectedActions;

        let actionNodes = [];
        if (activePlace) {
            activePlace.get('actions').forEach((action) => {
                actionNodes.push(
                    <Action key={activePlace.get('slug') + action.get('slug')} action={action} onSelect={this.selectAction.bind(this)} />
                )
            });

            freeActions.forEach((action) => {
                actionNodes.push(
                    <Action key={activePlace.get('slug') + action.get('slug')} action={action} onSelect={this.selectAction.bind(this)} />
                )
            });
        }

        renderActions = (
            <div className="column col-action">
                <ReactCSSTransitionGroup transitionName="action" transitionLeave={false}>
                    {actionNodes}
                </ReactCSSTransitionGroup>
             </div>
        )

        let activeActionNodes = [];
        if (selectedActions.size) {
            selectedActions.forEach((action) => {
                activeActionNodes.push(
                    <Action
                         key={activeMember.get('slug') + action.get('slug')}
                         action={action.get('action')}
                         onSelect={this.removeAction.bind(this, action)} />
                )
            });
        }

        renderSelectedActions = (
            <div className="column col-action">
                <ReactCSSTransitionGroup transitionName="action" transitionLeave={false}>
                    {activeActionNodes}
                 </ReactCSSTransitionGroup>
            </div>
        )

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
