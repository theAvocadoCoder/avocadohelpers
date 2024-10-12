/**********************************
* General Utility Functions
*/
/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function
* @param {number?} delay the amount of time to wait before function can be run again
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
export default {
    debounce
};
//# sourceMappingURL=index.js.map