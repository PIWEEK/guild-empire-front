import React from 'react';
import _ from 'lodash';

function unCursor(cursor) {
    if (!cursor || !cursor.deref) {
        return cursor;
    }

    return cursor.deref();
}

export class Component extends React.Component {
    shouldComponentUpdate(nextProps) {
        let propsKeys = Object.keys(this.props);

        return _.some(propsKeys, (prop) => {
            if (_.isFunction(this.props[prop])) {
                return false;
            }

            if (this.props[prop] === nextProps[prop]) {
                return true;
            }

            return unCursor(this.props[prop]) !== unCursor(nextProps[prop]);
        });
    }
}
