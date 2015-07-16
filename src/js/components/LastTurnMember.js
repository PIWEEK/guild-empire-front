import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';
import boardActions from '../actions/board.actions';
import Event from './Event';

@ImmutableProps
class LastTurnMember extends React.Component {
    render() {
        const lastTurnMember = this.props.lastTurnMember;

        console.log(lastTurnMember.toJS());

        return (
                <div className="character-event">
                    <div className="item">
                      <div className="row">
                        <div className="avatar">
                          <img src="/images/characters/priest.png" />
                        </div>
                        <div className="text">
                          <div className="name">Lorenzo <strong>, The assasin</strong></div>
                          <div className="assets">
                              <div className="asset gold">
                                <div className="image">
                                  <Isvg src="/images/currency/gold.svg" />
                                </div>
                                <div className="text">
                                  <span className="ammount">+100</span>
                                </div>
                              </div>

                              <div className="asset influence">
                                <div className="image">
                                  <Isvg src="/images/currency/influence.svg" />
                                </div>
                                <div className="text">
                                  <span className="ammount">+100</span>
                                </div>
                              </div>

                              <div className="asset reputation">
                                <div className="image">
                                  <Isvg src="/images/currency/reputation.svg" />
                                </div>
                                <div className="text">
                                  <span className="ammount">+100</span>
                                </div>
                              </div>

                              <div className="asset infamy">
                                <div className="image">
                                  <Isvg src="/images/currency/infamy.svg" />
                                </div>
                                <div className="text">
                                  <span className="ammount">+100</span>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>

                      <div>
                          {lastTurnMember.get('events').map(function(e) {
                              return <Event event={e} />
                          })}
                      </div>


                    </div>

                </div>
        );
    }
}

export default LastTurnMember;
