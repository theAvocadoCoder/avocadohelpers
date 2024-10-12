/**********************************
* General Utility Functions
*/

  

/***********************************
* Debounce a function
*
* @param {(any: any) => any} func the function
* @param {number?} delay the amount of time to wait before function can be run again
*/
export function debounce<T extends (...args: any[]) => any>(func: T, delay?: number): (this: any, ...args: Parameters<T>) => void {
  let timeoutId: number;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export default {
  debounce
}
