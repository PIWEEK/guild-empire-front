import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class Music extends React.Component {
    musicToggle(e) {
        e.preventDefault();

        commonActions.musicToggle();
    }
    render() {
        let musicOn = this.props.musicOn;

        return (
            <div>
                <a href="#" onClick={this.musicToggle}>Music {musicOn?'ON':'OFF'}</a>
            </div>
        );
    }
}

export default Music;
