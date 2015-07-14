import React from 'react';

import {ImmutableProps} from '../utils';
import Isvg from 'react-inlinesvg';

@ImmutableProps
class ActiveMember extends React.Component {
    render() {
        return (
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
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li className="positive">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li className="negative">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li>
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li className="positive">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li className="negative">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li>
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
                    <div className="name">Constitution</div>
                    <div className="ammount">35</div>
                  </li>
                  <li className="positive">
                    <div className="image"><Isvg src="/images/stats/constitution.svg" /></div>
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
                      <div className="tooltip">
                        Soy un tooltip con texto util que me activo en hover
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <div className="tooltip">
                        Soy un tooltip con texto util que me activo en hover
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <div className="tooltip">
                        Soy un tooltip con texto util que me activo en hover
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <div className="tooltip">
                        Soy un tooltip con texto util que me activo en hover
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <div className="tooltip">
                        Soy un tooltip con texto util que me activo en hover
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        );
    }
}

export default ActiveMember;
