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

    componentDidUpdate() {
        let musicOn = this.props.musicOn;

        let myAudio = React.findDOMNode(this.refs.backgroundMusic);

        if (musicOn) {
            myAudio.play();
        } else {
            myAudio.pause();
        }

    }

    render() {
        let musicOn = this.props.musicOn;

        return (
            <div className="guild-music btn-green">

                <a href="#" onClick={this.musicToggle.bind(this)}>Music {musicOn?'ON':'OFF'}</a>

                <audio ref="backgroundMusic" autoPlay loop>
                    <source src="./music/guild-music.mp3"/>
                    <source src="./music/guild-music-2.mp3"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Music;
