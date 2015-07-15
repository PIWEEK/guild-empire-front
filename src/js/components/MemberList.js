import React from 'react';

import {ImmutableProps} from '../utils';
import Member from './Member';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class MemberList extends React.Component {
    render() {
        return (
          <div className="member-list">
            {this.props.members.map(function(member) {
                return <Member key={member.get('slug')} member={member} />
            })}
          </div>
        );
    }
}

export default MemberList;
