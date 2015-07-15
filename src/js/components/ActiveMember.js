import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class ActiveMember extends React.Component {
    render() {
        let member = this.props.member;

        return (
          <div className="active-member">
            <div className="avatar"></div>
            <div className="content">
              <div className="data">
                <div className="credentials">
                  <h1>{member.get('name')}</h1>
                  <h2>{member.get('archetype')}</h2>
                </div>
                <ul className="stats">
                  {member.get('skills').map(function(skill){
                  return (<li key={skill.get('slug')} className="positive">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">{skill.get('name')}</div>
                    <div className="ammount">{skill.get('value')}</div>
                  </li>)
                  })}
                </ul>
              </div>
              <div className="condition">
                <h1>Conditions</h1>
                <ul>
                {member.get('conditions').map(function(condition){
                  return (<li key={condition.get('slug')} >
                    <div className="image">
                      <div className="tooltip">
                        {condition.get('name')}
                      </div>
                    </div>
                  </li>)
                })}
                </ul>
              </div>
            </div>

          </div>
        );
    }
}

export default ActiveMember;
