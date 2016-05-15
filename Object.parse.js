/**
 * Project: Object.parse
 * Author: Marek Zeman
 * Twitter: MarekZeman91
 * Site: http://marekzeman.cz
 * License: MIT
 * Version: 1.0
 */
Object.parse = (function () {
    var fnRegExp = /^function[^(]*\([^)]*\)[^{]*\{[\s\S]*}$/;

    function reviver(k, v) {
        return typeof v === 'string' && v.match(fnRegExp) ? Function('return ' + v)() : v;
    }

    return function (obj) {
        return JSON.parse(obj, reviver);
    }
})();
