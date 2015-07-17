import React from 'react';

import {ImmutableProps} from '../utils';

import Isvg from 'react-inlinesvg';

@ImmutableProps
class Action extends React.Component {
    selectAction() {
        this.props.onSelect(this.props.action);
    }
    render() {
        let action = this.props.action;

        let skillsNeeded;
        if (action.get('skills_needed')) {
            let skills = [];

            action.get('skills_needed').forEach((skill) => {
                skills.push(
                   <div className="icon">
                       <Isvg src={`/images/stats/${skill}.svg`} />
                    </div>
                );
            });

            skillsNeeded = (
                <div className="skill-needed">
                    <p className="title">Skill Needed</p>
                    <div className="icon-container">
                    {skills}
                    </div>
                </div>
            );
        }

        return (
              <div onClick={this.selectAction.bind(this)} className="col-item place">
                <div className="col-item-decor">

                  <div className="decor-row">
                    <div className="corner"></div>
                    <div className="top-border"></div>
                    <div className="corner right-up"></div>
                  </div>

                  <div className="decor-row">
                    <div className="left-border"></div>
                    <div className="content">
                      <div className="item-row name">
                        <div className="name">
                          {action.get('name')}
                        </div>
                        <div className="turns hide">
                          <div className="icon">
                            <Isvg src="/images/stats/time.svg" />
                          </div>
                          <div className="text">1 - 5</div>
                        </div>
                      </div>

                      <div className="item-row results">
                        {skillsNeeded}
                        <div className="expected-results">
                          <p className="title">Expected Result</p>
                          <div className="results-container">
                            <div className="results-item">
                              <div className="icon gold">
                                <Isvg src="/images/currency/gold.svg" />
                              </div>
                              <p>+1000</p>
                            </div>
                            <div className="results-item">
                              <div className="icon influence">
                                <Isvg src="/images/currency/influence.svg" />
                              </div>
                              <p>+1000</p>
                            </div>
                            <div className="results-item negative">
                              <div className="icon reputation">
                                <Isvg src="/images/currency/reputation.svg" />
                              </div>
                              <p>+100</p>
                            </div>
                            <div className="results-item negative">
                              <div className="icon infamy">
                                <Isvg src="/images/currency/infamy.svg" />
                              </div>
                              <p>-100</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-border"></div>
                  </div>

                  <div className="decor-row">
                    <div className="corner left-bottom"></div>
                    <div className="bottom-border"></div>
                    <div className="corner right-bottom"></div>
                  </div>

                </div>
              </div>

        );
    }
}

export default Action;
