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

function jsonToUrl(obj) {
    return Object.keys(obj).map(function(key){
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

var ajax = {
    request: function(method='GET', url, data = {}) {
        return new Promise(function(resolve, reject) {
            let http = new XMLHttpRequest();

            http.open(method, url, true);

            http.onreadystatechange = function() {
                if(http.readyState === 4) {
                    let response = JSON.parse(http.responseText);
                    if (http.status === 200) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            };

            http.send(JSON.stringify(data));
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

export function getSearchParameter(param) {
    var prmstr = window.location.search.substr(1);
    var params = prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};

    return params[param];
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

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
