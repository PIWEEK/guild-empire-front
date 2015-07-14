import React from 'react';

import {ImmutableProps} from '../utils';

@ImmutableProps
class Guild extends React.Component {
    render() {
        return (
          <div className="guild-container">
            <div className="guild-avatar">

            </div>
             <div className="guild-data">

              <div className="guild-name">
                <h1>Guild Name Goes Here</h1>
                <h2>Your guild Rank</h2>
              </div>
              <div className="guild-assets">

                <div className="asset gold">
                  <div className="image"></div>
                  <div className="text">
                    <div className="item">
                      <span className="left">Reputation:</span>
                      <span className="right">1.000.000</span>
                    </div>
                    <div className="item">
                      <span className="left">Income:</span>
                      <span className="right">1.000.000</span>
                    </div>
                  </div>
                </div>

                <div className="asset influence">
                  <div className="image"></div>
                  <div className="text">
                    <div className="item">
                      <span className="left">Influence:</span>
                      <span className="right">1.000.000</span>
                    </div>
                    <div className="item reputation">
                      <span className="left">Income:</span>
                      <span className="right">1.000.000</span>
                    </div>
                  </div>
                </div>

                <div className="asset reputation">
                  <div className="image"></div>
                  <div className="text">
                    <div className="item">
                      <span className="left">Reputation:</span>
                      <span className="right">1.000.000</span>
                    </div>
                    <div className="item">
                      <span className="left">Income:</span>
                      <span className="right">1.000.000</span>
                    </div>
                  </div>
                </div>

                <div className="asset infamy">
                  <div className="image"></div>
                  <div className="text">
                    <div className="item">
                      <span className="left">Infamy:</span>
                      <span className="right">1.000.000</span>
                    </div>
                    <div className="item">
                      <span className="left">Income:</span>
                      <span className="right">1.000.000</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="guild-interactions">
                <div className="btn-blue">Show Turn Resume</div>
              </div>
              <div className="guild-end-turn">
                <div className="btn-blue">End Turn</div>
              </div>
             </div>
           </div>
        );
    }
}

export default Guild;
