/**********************************
* General Utility Functions
*/
/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function
* @param {number?} delay the amount of time to wait before function can be run again
*/
export declare function debounce<T extends (...args: any[]) => any>(func: T, delay?: number): (this: any, ...args: Parameters<T>) => void;
declare const _default: {
    debounce: typeof debounce;
};
export default _default;
//# sourceMappingURL=index.d.ts.map