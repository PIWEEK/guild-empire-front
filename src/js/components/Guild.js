import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import Isvg from 'react-inlinesvg';
import Music from './Music';

@ImmutableProps
class Guild extends React.Component {
    endTurn(e) {
        e.preventDefault();

        commonActions.endTurn();
    }
    showResume(e) {
        e.preventDefault();

        commonActions.openResume();
    }
    render() {
        let guild = this.props.guild;
        let guildName = this.props.guildName;

        let assets = guild.get('assets');
        let gold = assets.deref().filter((item) => item.get('slug') === 'gold').get(0);
        let wood = assets.deref().filter((item) => item.get('slug') === 'wood').get(0);
        let influence = assets.deref().filter((item) => item.get('slug') === 'influence').get(0);
        let reputation = assets.deref().filter((item) => item.get('slug') === 'reputation').get(0);
        let infamy = assets.deref().filter((item) => item.get('slug') === 'infamy').get(0);

        return (
          <div className="guild-container">
            <div className="guild-avatar">
              <div className="shield">
                <Isvg src={`/images/shields/guild-${guild.get('color')}.svg`} />
              </div>
            </div>
             <div className="guild-data">
              <h1>{guildName}</h1>


              <div className="guild-assets">

                <div className="asset gold">
                  <div className="image">
                    <Isvg src="/images/currency/gold.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{gold.get('value')}</span>
                    <span className="income">(+ {gold.get('value')})</span>
                  </div>
                </div>

                <div className="asset influence">
                  <div className="image">
                    <Isvg src="/images/currency/influence.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{influence.get('value')}</span>
                    <span className="income">(+{influence.get('value')})</span>
                  </div>
                </div>

                <div className="asset reputation">
                  <div className="image">
                    <Isvg src="/images/currency/reputation.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{reputation.get('value')}</span>
                    <span className="income">(+{reputation.get('value')})</span>
                  </div>
                </div>

                <div className="asset infamy">
                  <div className="image">
                    <Isvg src="/images/currency/infamy.svg" />
                  </div>
                  <div className="text">
                    <span className="ammount">{infamy.get('value')}</span>
                    <span className="income">(+{infamy.get('value')})</span>
                  </div>
                </div>

              </div>

             </div>
             <div className="guild-interactions">
               <div className="btn-blue" onClick={this.showResume}>Show Turn Resume</div>
               <div className="btn-blue" onClick={this.endTurn}>End Turn</div>
             </div>

             <Music musicOn={this.props.musicOn} />

            </div>
        );
    }
}

export default Guild;
