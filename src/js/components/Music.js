import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class Music extends React.Component {
    musicToggle(e) {
        e.preventDefault();

        commonActions.musicToggle();

        let musicOn = this.props.musicOn;
        musicOn = musicOn===undefined || musicOn===true?true:false;

        // toggle
        musicOn = !musicOn
        console.log("musictoggle >>>>>>>>>>>>>>");
        console.log(musicOn);


        let myAudio = React.findDOMNode(this.refs.backgroundMusic);

        if (musicOn) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    }
    render() {
        let musicOn = this.props.musicOn;
        musicOn = musicOn===undefined || musicOn===true?true:false;

        console.log("music >>>>>>>>>>>>>>");
        console.log(musicOn);

        return (
            <div className="btn-green">

                <a href="#" onClick={this.musicToggle.bind(this)}>Music {musicOn?'ON':'OFF'}</a>

                <audio ref="backgroundMusic" controls autoPlay loop>
                    <source src="./music/guild-music.mp3"/>
                    <source src="./music/guild-music-2.mp3"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Music;
