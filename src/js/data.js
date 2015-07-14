import immstruct from 'immstruct';
import defaultData from './defaultData';

var structure = immstruct(defaultData);
var cursor = structure.cursor();

export function getStructure() {
    return structure;
};

export function getCursor() {
    return cursor;
};

export function getNewCursor() {
    cursor = structure.cursor();
    return cursor;
};
