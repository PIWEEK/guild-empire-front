import React from 'react';

import {ImmutableProps} from '../utils';
import ActiveMember from './ActiveMember';
import MemberList from './MemberList';
import ActionManagment from './ActionManagment';
import Isvg from 'react-inlinesvg';
import boardActions from '../actions/board.actions';

@ImmutableProps
class GameZone extends React.Component {
    render() {
        let activeMember = this.props.activeMember;
        let activePlace = this.props.activePlace;
        let turn = this.props.turn;
        let selectedActions = this.props.selectedActions;

        let activeMemberTemplate;
        if(activeMember) {
            activeMemberTemplate = <ActiveMember member={activeMember} />;
        }

        return (
          <div className="game-zone-container guild-green">
            <div className="member-managment-wrapper">
              <div className="decor-managment-managment reverse">
                <div className="degrade"></div>
              </div>
              <div className="member-managment-container">
                {activeMemberTemplate}
                <MemberList members={this.props.turn.getIn(['guild', 'members'])}/>
              </div>
              <div className="decor-managment-managment ">
                <div className="degrade"></div>
              </div>
            </div>
            <ActionManagment
                selectedActions={selectedActions}
                places={turn.get('places')}
                activePlace={activePlace}
                freeActions={turn.get('free_actions')} />
          </div>
        );
    }
}

export default GameZone;
