import React from 'react';

import {ImmutableProps} from '../utils';
import Member from './Member';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class MemberList extends React.Component {
    memberActions(member) {
        let selectedActions = this.props.selectedActions;
        let actions = selectedActions.deref().filter((action) => {
            return action.getIn(['character', 'slug']) === member.get('slug');
        });

        return actions.size;
    }
    render() {
        let selectedActions = this.props.selectedActions;
        let members = this.props.members;

        return (
          <div className="member-list">
            {members.map((member) => {
                return <Member
                    key={member.get('slug')}
                    actions={this.memberActions.call(this, member)}
                    member={member} />
            })}
          </div>
        );
    }
}

export default MemberList;
