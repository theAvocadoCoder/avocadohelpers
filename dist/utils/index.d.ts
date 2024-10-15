/**********************************
* General Utility Functions
*/
/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function to be called
* @param {number} delay the amount of time to wait before calling the function
*/
export declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (this: any, ...args: Parameters<T>) => void;
/************************************
 * Throttle a function
 *
 * @param {(any: any) => any} func the function to be called
 * @param {number} pause the time to wait after execution before function can be called again
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, pause: number): (this: any, ...args: Parameters<T>) => void;
declare const _default: {
    debounce: typeof debounce;
    throttle: typeof throttle;
};
export default _default;
//# sourceMappingURL=index.d.ts.map