/**********************************
* General Utility Functions
*/

/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function to be called
* @param {number} delay the amount of time to wait before calling the function
*/
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (this: any, ...args: Parameters<T>) => void {
  let timeoutId: any;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}


/************************************
 * Throttle a function
 * 
 * @param {(any: any) => any} func the function to be called
 * @param {number} pause the time to wait after execution before function can be called again
 */
export function throttle<
  T extends (...args: any[]) => any
>(
  func: T,
  pause: number
): (
  this: any,
  ...args: Parameters<T>
) => void {
  let isThrottling: boolean;

  return function(this: any, ...args: Parameters<T>) {
    if (!isThrottling) {
      func.apply(this, args);
      isThrottling = true;

      setTimeout(() => (isThrottling = false), pause);
    }
  }
}


export type GenericFunction = (...args: any[]) => any 

export interface MemoType {
  ( func: GenericFunction ): ( this: any, ...args: Parameters<GenericFunction> ) => any;
  cache?: Map<any, any>;
}

/**************************************
 * Memoize a function
 * 
 * @param func the pure function to be memoized
 */
export const memoize: MemoType = function (func: (...args: any[]) => any): any {
  if (!memoize.cache) memoize.cache = new Map();

  return function(this: any, ...args: any[]) {

    if (!memoize.cache?.has(args)) memoize.cache?.set(
      Symbol.for(JSON.stringify(args)),
      func.apply(this, args)
    );

    return memoize.cache?.get(Symbol.for(JSON.stringify(args)));
  }
}




export default {
  debounce,
  throttle,
  memoize,
}
