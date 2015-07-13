// import React from 'react';
import _ from 'lodash';

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
