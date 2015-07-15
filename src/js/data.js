import immstruct from 'immstruct';
import defaultData from './defaultData';

let structure = immstruct(defaultData);
let cursor = structure.cursor();

export function getStructure() {
    return structure;
}

export function getCursor() {
    return cursor;
}

export function getNewCursor() {
    cursor = structure.cursor();
    return cursor;
}
