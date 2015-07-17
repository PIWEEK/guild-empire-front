import React from 'react';

import {ImmutableProps} from '../utils';
import Event from './Event';
import EventGuildAsset from './EventGuildAsset';

@ImmutableProps
class LastTurnMember extends React.Component {
    render() {
        const lastTurnMember = this.props.lastTurnMember;
        const character = lastTurnMember.get('character');
        const guild_assets = lastTurnMember.get('guild_assets');
        const events = lastTurnMember.get('events');

        console.log(lastTurnMember.toJS());

        return (
                <div className="character-event">
                    <div className="item">
                      <div className="row">
                        <div className="avatar">
                            <img src={`/images/characters/${character.get('avatar_slug')}.png`} />
                        </div>
                        <div className="text">
                          <div className="name">{character.get('name')} <strong>, The {character.get('archetype')}</strong></div>

                          <div className="assets">

                              {guild_assets.map(function(e) {
                                  return <EventGuildAsset eventGuildAsset={e} />
                              })}

                          </div>
                        </div>
                      </div>

                      <div>
                          {events.map(function(e) {
                              return <Event event={e} />
                          })}
                      </div>


                    </div>

                </div>
        );
    }
}

export default LastTurnMember;
