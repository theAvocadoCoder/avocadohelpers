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
  let timeoutId: number;
  
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



export default {
  debounce,
  throttle,
}
