import React from 'react';

import {ImmutableProps} from '../utils';
import ActiveMember from './ActiveMember';
import MemberList from './MemberList';
import ActionManagment from './ActionManagment';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class GameZone extends React.Component {
    render() {
        let activeMember = this.props.activeMember;
        let activePlace = this.props.activePlace;
        let turn = this.props.turn;

        if (!activeMember) {
            activeMember = turn.getIn(['guild', 'members']).get(0);
        }

        return (
          <div className="game-zone-container">
            <div className="member-managment-wrapper">
              <div className="member-managment-container">
                <ActiveMember member={activeMember} />
                <MemberList members={this.props.turn.getIn(['guild', 'members'])}/>
              </div>
            </div>
            <ActionManagment
                places={turn.get('places')}
                activePlace={activePlace}
                freeActions={turn.get('free_actions')} />
          </div>
        );
    }
}

export default GameZone;
