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
export default {
    debounce,
    throttle,
};
//# sourceMappingURL=index.js.map