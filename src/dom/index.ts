/**
 * DOM functions
 */

import {htmlElementAttributes} from "html-element-attributes";


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

/**
 * 
 * @param {string} className - The desired className
 * @param {HTMLElemet[] | HTMLCollection} elements - The elements to remove the className from
 */
export function removeClass(className: string, elements: HTMLElement[] | HTMLCollection): void {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}

export interface CreateElementOptions {
  styles: CSSStyleDeclaration;
  styleSheet: CSSStyleSheet;
  id: string;
}

/**
 * 
 * @overload
 * @param {K extends keyof HTMLElementTagNameMap} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */

/**
 * 
 * @overload
 * @param {string} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options: CreateElementOptions): HTMLElementTagNameMap[K];
export function createElement(tagName: string, options: CreateElementOptions): HTMLElement {

  const element = document.createElement(tagName);

  let rules = "";

  for (let i = 0; i < options.styles.length; i++) {
    rules += `${options.styles[0]}`;
  }

  options.styleSheet.insertRule(`${options.id} { ${rules} }`)

  return document.createElement(tagName)
}

export default {
  getIds,
  style,
  addClass,
  removeClass,
};
