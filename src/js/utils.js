// import React from 'react';
import _ from 'lodash';
import Promise from 'bluebird';
import * as data from './data';

function unCursor(cursor) {
    if (!cursor || !cursor.deref) {
        return cursor;
    }

    return cursor.deref();
}

export function ImmutableProps(target) {
    target.prototype.shouldComponentUpdate = function(nextProps) {
        let propsKeys = Object.keys(this.props);

        return _.some(propsKeys, (prop) => {
            if (_.isFunction(this.props[prop])) {
                return false;
            }

            return unCursor(this.props[prop]) !== unCursor(nextProps[prop]);
        });
    };
}

export function Action(target) {
    Object.defineProperty(target, 'cursor', {
        get: function() {
            return data.getCursor();
        }
    });

    return target;
}

var ajax = {
    request: function(method='GET', url, body = {}) {
        return new Promise(function(resolve, reject) {
            let http = new XMLHttpRequest();

            http.open(method, url, true);

            http.onreadystatechange = function() {
                if(http.readyState === 4) {
                    let response;

                    if(method === 'GET') {
                        response = JSON.parse(http.responseText);
                    } else {
                        response = http.responseText;
                    }

                    if (http.status >= 200) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            };

            http.send(JSON.stringify(body));
        });
    },
    get: function(url, params={}) {
        let query = [];

        _.forIn(params, (param, key) => {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(param));
        });

        url = url + (query.length ? '?' + query.join('&') : '');

        return ajax.request('GET', url);
    },
    post: function(url, params={}) {
        return ajax.request('POST', url, params);
    }
};

export {ajax};

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split('&');
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split('=');
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

export function getSearchParameter(param) {
    var prmstr = window.location.search.substr(1);
    var params = prmstr !== null && prmstr !== '' ? transformToAssocArray(prmstr) : {};

    return params[param];
}

var conditions = {
    'governor': ['bad', 'broken-bone']
};

export function parseCondition(slug) {
    return conditions[slug];
}

export function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export function guildColor(guild) {
    let guilds = {
        medici: 'guild-green',
        malatesta: 'guild-red'
    };

    return guilds[guild];
}

/*
var skills = {
    'martial-arts': 'martial-art',
    'eloquence': 'eloquence',
    'stealth': 'subterfuge',
    'gathering': 'gathering',
    'loyalty': 'loyalty',
    'constitution': 'constitution',
    'dexterity': 'dexterity',
    'crafting': 'crafting'
};

var parseIcons = {
    skill: function(slug) {
        return skills[slug];
    }
};

export {parseIcons};
*/
