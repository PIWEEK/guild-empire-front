import React from 'react';

import {ImmutableProps} from '../utils';
import boardActions from '../actions/board.actions';

import Isvg from 'react-inlinesvg';

@ImmutableProps
class Action extends React.Component {
    selectAction() {
        boardActions.addAction(this.props.action);
    }
    render() {
        let action = this.props.action;

        return (
              <div onClick={this.selectAction.bind(this)} className="col-item place">
                <div className="item-row name">
                  <div className="icon">
                    <Isvg src="/images/stats/constitution.svg" />
                  </div>
                  <div className="name">
                    {action.get('name')}
                  </div>
                  <div className="turns">
                    <div className="icon">
                      <Isvg src="/images/stats/constitution.svg" />
                    </div>
                    <div className="text">1 - 5</div>
                  </div>
                </div>

                <div className="item-row results">
                  <div className="skill-needed">
                    <p className="title">Skill Needed</p>
                    <div className="icon-container">
                      <div className="icon">
                        <Isvg src="/images/stats/constitution.svg" />
                        <Isvg className="skill skill-up"src="/images/arrow.svg" />
                      </div>
                      <div className="icon">
                        <Isvg src="/images/stats/constitution.svg" />
                        <Isvg className="skill skill-down"src="/images/arrow.svg" />
                      </div>
                      <div className="icon">
                        <Isvg src="/images/stats/constitution.svg" />
                      </div>
                    </div>
                  </div>

                  <div className="expected-results">
                    <p className="title">Expected Result</p>
                    <div className="results-container">
                      <div className="results-item">
                        <div className="icon">
                          <Isvg src="/images/stats/constitution.svg" />
                        </div>
                        <p>+1000</p>
                      </div>
                      <div className="results-item">
                        <div className="icon">
                          <Isvg src="/images/stats/constitution.svg" />
                        </div>
                        <p>+1000</p>
                      </div>
                      <div className="results-item negative">
                        <div className="icon">
                          <Isvg src="/images/stats/constitution.svg" />
                        </div>
                        <p>+1000</p>
                      </div>
                      <div className="results-item negative">
                        <div className="icon">
                          <Isvg src="/images/stats/constitution.svg" />
                        </div>
                        <p>+1000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Action;
