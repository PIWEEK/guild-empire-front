import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';
import boardActions from '../actions/board.actions';

@ImmutableProps
class Member extends React.Component {
    selectMember() {
        boardActions.selectMember(this.props.member);
    }
    render() {
        let member = this.props.member;
        let actions = this.props.actions;

        return (
            <div onClick={this.selectMember.bind(this)} className="member">
              <div className="avatar">
                <img src={`/images/characters/${member.get('avatar_slug')}.png`} />
              </div>
              <div className="actions">
                <div className="image">
                  <Isvg src="/images/stats/time.svg" />
                </div>
                <div className="text">{actions}/8</div>
              </div>
            </div>
        );
    }
}

export default Member;
