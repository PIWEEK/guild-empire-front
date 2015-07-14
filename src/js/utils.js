// import React from 'react';
import _ from 'lodash';
import Promise from 'bluebird';

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

function jsonToUrl(obj) {
    return Object.keys(obj).map(function(key){
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

var ajax = {
    request: function(method, url, params={}) {
        return new Promise(function(resolve, reject) {
            var strParams = jsonToUrl(params);
            var http = new XMLHttpRequest();

            http.onreadystatechange = function() {
                if(http.readyState == 4) {
                    let response = JSON.parse(http.responseText);

                    if (http.status == 200) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            };

            http.open(method, url, true);
            http.send(strParams);
        });
    },
    get: function(url, params={}) {
        return ajax.request('GET', url, params);
    },
    post: function(url, params={}) {
        return ajax.request('POST', url, params);
    }
};

export {ajax};
