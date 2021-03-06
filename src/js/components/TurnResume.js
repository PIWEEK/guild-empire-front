import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import LastTurnMember from './LastTurnMember';

@ImmutableProps
class TurnResume extends React.Component {
    close() {
        commonActions.closeResume();
    }
    render() {
        const lastTurn = this.props.lastTurn;

        return (
          <div className="turn-resume">
            <div className="lightbox-overlay" onClick={this.close}></div>
            <div className="lightbox">
              <div className="decor-row top">
                <div className="corner">
                </div>
                <div className="top-border">
                </div>
                <div className="corner right-up">
                </div>
              </div>
              <div className="decor-row">
                <div className="left-border">
                </div>
                <div className="lightbox-content">
                  <div className="lightbox-title-container">
                    <h1>Turn <strong>24</strong> Sumary</h1>
                  </div>

                  <div>
                      {lastTurn.map(function(ltm) {

                          if (ltm.get('events').size || ltm.get('guild_assets').size) {
                              return <LastTurnMember lastTurnMember={ltm} />
                          }
                      })}
                  </div>

                </div>
                <div className="right-border">
                </div>
              </div>
              <div className="decor-row bottom">
                <div className="corner left-bottom">
                </div>
                <div className="bottom-border">
                </div>
                <div className="corner right-bottom">
                </div>
              </div>
            </div>
          </div>


        );
    }
}

export default TurnResume;
