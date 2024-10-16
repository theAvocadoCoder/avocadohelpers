/**********************************
* General Utility Functions
*/
/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function to be called
* @param {number} delay the amount of time to wait before calling the function
*/
export function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
/************************************
 * Throttle a function
 *
 * @param {(any: any) => any} func the function to be called
 * @param {number} pause the time to wait after execution before function can be called again
 */
export function throttle(func, pause) {
    let isThrottling;
    return function (...args) {
        if (!isThrottling) {
            func.apply(this, args);
            isThrottling = true;
            setTimeout(() => (isThrottling = false), pause);
        }
    };
}
/**************************************
 * Memoize a function
 *
 * @param func the pure function to be memoized
 */
export const memoize = function (func) {
    if (!memoize.cache)
        memoize.cache = new Map();
    return function (...args) {
        var _a, _b, _c;
        if (!((_a = memoize.cache) === null || _a === void 0 ? void 0 : _a.has(args)))
            (_b = memoize.cache) === null || _b === void 0 ? void 0 : _b.set(Symbol.for(JSON.stringify(args)), func.apply(this, args));
        return (_c = memoize.cache) === null || _c === void 0 ? void 0 : _c.get(Symbol.for(JSON.stringify(args)));
    };
};
export default {
    debounce,
    throttle,
    memoize,
};
//# sourceMappingURL=index.js.map