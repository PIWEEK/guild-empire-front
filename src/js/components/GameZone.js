import React from 'react';

import {ImmutableProps} from '../utils';
import ActiveMember from './ActiveMember';
import MemberList from './MemberList';
import ActionManagment from './ActionManagment';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class GameZone extends React.Component {
    render() {
        return (
          <div className="game-zone-container">
            <div className="member-managment-container">
              <ActiveMember />
              <MemberList />
            </div>
            <ActionManagment />
          </div>
        );
    }
}

export default GameZone;
