/**
 * DOM functions
 */


/**
 * 
 * @param id - The ID to search the DOM for
 * @returns {HTMLElement | null} - The element with that ID or null if no element exists
 */
const gId = (id: string): HTMLElement | null => document.getElementById(id);

/**
 * 
 * @param ids - The IDs to search the DOM for 
 * @returns {(HTMLElement | null)[]} - An array of elements with the IDs or null where no element exists
 */
export function getIds(...ids: string[]): (HTMLElement | null)[] {
  const idArray: (HTMLElement | null)[] = [];
  for (let i = 0; i < ids.length; i++) {
    idArray.push(gId(ids[i]));
  }
  return idArray;
}

/**
 * 
 * @overload
 * @param {HTMLElement} element 
 * @param {CSSStyleDeclaration} styleObj
 */

/**
 * 
 * @overload
 * @param {HTMLElement[]} elements 
 * @param {CSSStyleDeclaration} styleObj
 */
export function style(element: HTMLElement, styleObj: CSSStyleDeclaration): void;
export function style(elements: HTMLElement[], styleObj: CSSStyleDeclaration): void;

/**
 * 
 * @param {HTMLElement | HTMLElement[]} element - The element(s) to be styled
 * @param {CSSStyleDeclaration} styleObj - The styles to be applied to the element
 */
export function style(element: any, styleObj: CSSStyleDeclaration): void {
  const stylesArr = Object.entries(styleObj).filter(entry => !!entry[1]);
  for (let i = 0; i < stylesArr.length; i++) {
    const property = stylesArr[i][0];

    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        (element[j].style as { [key: string]: any })[property] = stylesArr[i][1];
      }
    } else {
      (element.style as { [key: string]: any })[property] = stylesArr[i][1];
    }
  }
}

/**
 * 
 * @param {string} className - The desired className
 * @param {HTMLElement[] | HTMLCollection} elements - The elements to add the className to
 */
export function addClass(className: string, elements: HTMLElement[] | HTMLCollection): void {
  for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(className);
  }
}

export default {
  getIds,
  style,
  addClass,
};
