import React from 'react';

import {ImmutableProps} from '../utils';

@ImmutableProps
class GameZone extends React.Component {
    render() {
        return (
          <div className="game-zone-container">
            <div className="member-managment-container">
              <div className="active-member">
                <div className="avatar"></div>
                <div className="content">
                  <div className="data">
                    <div className="credentials">
                      <h1>Active Member Name</h1>
                      <h2>Guild Leader</h2>
                    </div>
                    <ul className="stats">
                      <li>
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>
                      <li className="positive">
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>
                      <li className="negative">
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>
                      <li>
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>
                      <li>
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>
                      <li>
                        <div className="image"><svg></svg></div>
                        <div className="name">Constitution</div>
                        <div className="ammount">35</div>
                      </li>

                    </ul>
                  </div>
                  <div className="condition">
                    <h1>Conditions</h1>
                    <ul>
                      <li>
                        <div className="image">
                          <svg></svg>
                          <div className="tooltip">
                            Soy un tooltip con texto util que me activo en hover
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <svg></svg>
                          <div className="tooltip">
                            Soy un tooltip con texto util que me activo en hover
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <svg></svg>
                          <div className="tooltip">
                            Soy un tooltip con texto util que me activo en hover
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <svg></svg>
                          <div className="tooltip">
                            Soy un tooltip con texto util que me activo en hover
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <svg></svg>
                          <div className="tooltip">
                            Soy un tooltip con texto util que me activo en hover
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="member-list">
                <div className="member">
                  <div className="avatar"></div>
                  <div className="actions">
                    <div className="image"></div>
                    <div className="text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default GameZone;
