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
            <div className="guild-music">
                <a href="#" onClick={this.musicToggle.bind(this)}>
                    <div className="btn-green">
                        <span>Music {musicOn?'ON':'OFF'}</span>

                        <audio ref="backgroundMusic" autoPlay={musicOn?true:false} loop>
                            <source src="./music/guild-music.mp3"/>
                            <source src="./music/guild-music-2.mp3"/>
                                Your browser does not support the audio element.
                        </audio>
                    </div>
                </a>
            </div>
        );
    }
}

export default Music;
