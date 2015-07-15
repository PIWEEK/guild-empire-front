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

        return (
            <div onClick={this.selectMember.bind(this)} className="member">
              <div className="avatar">
              </div>
              <div className="actions">
                <div className="image">
                  <Isvg src="/images/stats/constitution.svg" />
                </div>
                <div className="text">0/8</div>
              </div>
            </div>
        );
    }
}

export default Member;
