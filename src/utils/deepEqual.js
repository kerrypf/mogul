/* eslint-disable */
//https://github.com/epoberezkin/fast-deep-equal/blob/master/index.js
export function deepEqual(a, b) {
  const isArray = Array.isArray;
  const keyList = Object.keys;
  const hasProp = Object.prototype.hasOwnProperty;

  if (a === b) return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    let arrA = isArray(a),
      arrB = isArray(b),
      i,
      length,
      key;

    if (arrA && arrB) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) if (!deepEqual(a[i], b[i])) return false;
      return true;
    }

    if (arrA !== arrB) return false;

    let dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA !== dateB) return false;
    if (dateA && dateB) return a.getTime() === b.getTime();

    let regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA !== regexpB) return false;
    if (regexpA && regexpB) return a.toString() === b.toString();

    let keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0; ) if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0; ) {
      key = keys[i];
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
}
