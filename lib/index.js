'use strict';

module.exports = function parseEdgescapeString(edgescapeString) {
    if (Object.prototype.toString.call(edgescapeString) !== '[object String]' || edgescapeString.indexOf('=') < 0) {
        return edgescapeString;
    }
    return edgescapeString
        .split(',')
        .map(function splitIntoKeyValues(pair) {
            return pair.split('=');
        })
        .reduce(function reduceToObject(obj, val) {
            var key = val[0].trim();
            obj[key] = val[1].trim();
            return obj;
        }, {});
};