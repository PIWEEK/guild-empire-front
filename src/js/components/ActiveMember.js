import React from 'react';

import {ImmutableProps, parseCondition} from '../utils';
import Isvg from 'react-inlinesvg';
import Skill from './Skill';
import classNames from 'classnames';

@ImmutableProps
class ActiveMember extends React.Component {
    render() {
        let member = this.props.member;

        let conditionRender;
        if (member.get('conditions').size) {
            conditionRender = (
              <div className="condition">
                <h1>Conditions</h1>
                <ul>
                {member.get('conditions').map(function(condition){
                    let conditionInfo = parseCondition(condition.get('slug'));

                    let classes = {
                        'condition-item': true
                    };

                    classes[conditionInfo[0]] = true;

                    let classObj = classNames(classes);

                    return (<li key={condition.get('slug')} >
                    <div className={classObj}>
                       <Isvg src={`/images/conditions/${conditionInfo[1]}.svg`} />
                    </div>
                  </li>)
                })}
                </ul>
              </div>
            )
        }

        return (
          <div className="active-member">
            <div className="avatar">
                <img src={`/images/characters/${member.get('avatar_slug')}.png`} />
            </div>
            <div className="content">
              <div className="data">
                <div className="credentials">
                  <h1>{member.get('name')}</h1>
                  <h2>{member.get('archetype')}</h2>
                </div>
                <ul className="stats">
                  {member.get('skills').map(function(skill){
                      return <Skill key={skill.get('slug')} skill={skill}/>
                  })}
                </ul>
              </div>
              {conditionRender}
            </div>

          </div>
        );
    }
}

export default ActiveMember;
