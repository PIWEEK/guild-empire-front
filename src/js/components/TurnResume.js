import React from 'react';

import {ImmutableProps} from '../utils';
import commonActions from '../actions/common.actions';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class GameZone extends React.Component {
    close() {
        commonActions.closeResume();
    }
    render() {
        return (

          <div className="turn-resume">
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

                  <div className="character-event">
                    <div className="item">
                      <div className="row">
                        <div className="image">
                          <img src="/images/characters/cleric.png" />
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
                      <div className="row">
                        <div className="image">
                          <div className="condition-item bad">
                            <Isvg src="/images/currency/gold.svg" />
                          </div>
                        </div>
                        <div className="text">
                          Someone assaulted Lorenzo an he broke one of his bones
                        </div>
                      </div>

                    </div>

                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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

                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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

                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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
                    <div className="item">

                      <div className="avatar">
                        <img src="/images/characters/cleric.png" />
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

export default GameZone;
