import React from 'react';
import {Spring} from 'react-motion';

import {ImmutableProps} from '../utils';
import ActiveMember from './ActiveMember';
import MemberList from './MemberList';
import ActionManagment from './ActionManagment';
import Isvg from 'react-inlinesvg';
import boardActions from '../actions/board.actions';
import classNames from 'classnames';

@ImmutableProps
class GameZone extends React.Component {
    getClasses(bgs, current, old, reverse) {
        return bgs.map((bgName) => {
            let className = {
                'deactivate': bgName === old,
                'active': bgName === current,
                'reverse': reverse,
                'place-bg': true
            };

            className[bgName] = true;

            return classNames(className);
        });

    }
    render() {
        let activeMember = this.props.activeMember;
        let activePlace = this.props.activePlace;
        let turn = this.props.turn;
        let selectedActions = this.props.selectedActions;
        let bg = this.props.bg;

        let activeMemberTemplate;
        if(activeMember) {
            activeMemberTemplate = <ActiveMember member={activeMember} />;
        }

        let bgs = [
            'default',
            'forest',
            'church',
            'mine',
            'market',
            'port',
            'tavern',
            'academy'
        ];

        let leftBgs = this.getClasses(bgs, bg.get('current'), bg.get('old'), true);
        let rightBgs = this.getClasses(bgs, bg.get('current'), bg.get('old'), false);

        return (
          <div className="game-zone-container">
            <div className="member-managment-wrapper">
              <div className="decor-managment-managment">
                {leftBgs.map((classes, key) => {
                    return <div key={key} className={classes} />
                })}
                <div className="reverse degrade"></div>
              </div>
              <div className="member-managment-container">
                {activeMemberTemplate}
                <MemberList members={this.props.turn.getIn(['guild', 'members'])}/>
              </div>
              <div className="decor-managment-managment ">
                {rightBgs.map((classes, key) => {
                    return <div key={key} className={classes} />
                })}
                <div className="degrade"></div>
              </div>
            </div>
            <ActionManagment
                selectedActions={selectedActions}
                places={turn.get('places')}
                activePlace={activePlace}
                activeMember={activeMember}
                freeActions={turn.get('free_actions')} />
          </div>
        );
    }
}

export default GameZone;
