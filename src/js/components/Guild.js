import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import Isvg from 'react-inlinesvg';
import Music from './Music';

@ImmutableProps
class Guild extends React.Component {
    showResume(e) {
        e.preventDefault();

        commonActions.openResume();
    }
    render() {
        let guild = this.props.guild;

        return (
          <div className="guild-container">
            <div className="guild-avatar">
            </div>
             <div className="guild-data">
              <h1>Guild Name Goes Here</h1>


              <div className="guild-assets">

                <div className="asset gold">
                  <div className="image">
                    <Isvg src="/images/currency/gold.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{guild.get('gold')}</span>
                    <span className="income">(+ {guild.get('gold')})</span>
                  </div>
                </div>

                <div className="asset influence">
                  <div className="image">
                    <Isvg src="/images/currency/influence.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{guild.get('influence')}</span>
                    <span className="income">(+{guild.get('influence')})</span>
                  </div>
                </div>

                <div className="asset reputation">
                  <div className="image">
                    <Isvg src="/images/currency/reputation.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{guild.get('reputation')}</span>
                    <span className="income">(+{guild.get('reputation')})</span>
                  </div>
                </div>

                <div className="asset infamy">
                  <div className="image">
                    <Isvg src="/images/currency/infamy.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{guild.get('infamy')}</span>
                    <span className="income">(+{guild.get('infamy')})</span>
                  </div>
                </div>

              </div>

             </div>
             <div className="guild-interactions">
               <div className="btn-blue" onClick={this.showResume}>Show Turn Resume</div>
               <div className="btn-blue">End Turn</div>
             </div>

             <Music musicOn={this.props.musicOn} />

            </div>
        );
    }
}

export default Guild;
