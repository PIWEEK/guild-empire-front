import React from 'react';

import {ImmutableProps, parseIcons} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class Skill extends React.Component {
    render() {
        let skill = this.props.skill;
        let icon = skill.get('slug');

        icon = '/images/stats/' + icon + '.svg';

        return (
            <li key={skill.get('slug')} className="positive">
                <div className="image"><Isvg src={icon} /></div>
                <div className="name">{skill.get('name')}</div>
                <div className="ammount">{skill.get('value')}</div>
            </li>
        );
    }
}

export default Skill;
