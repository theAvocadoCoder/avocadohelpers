/**
 * DOM functions
 */

import {htmlElementAttributes} from "./types";


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
 * @param {CSSStyleSheet} styleSheet
 */

/**
 * 
 * @overload
 * @param {HTMLElement[]} elements 
 * @param {CSSStyleDeclaration} styleObj
 * @param {CSSStyleSheet} styleSheet
 */
export function style(element: HTMLElement, styleObj: CSSStyleDeclaration, styleSheet?: CSSStyleSheet | null): string | void;
export function style(elements: HTMLElement[], styleObj: CSSStyleDeclaration, styleSheet?: CSSStyleSheet | null): string | void;

/**
 * 
 * @param {HTMLElement | HTMLElement[]} element - The element(s) to be styled
 * @param {CSSStyleDeclaration} styleObj - The styles to be applied to the element
 * @param {CSSStyleSheet} styleSheet - The stylesheet to add the rules to
 */
export function style(element: HTMLElement | HTMLElement[], styleObj: CSSStyleDeclaration, styleSheet: CSSStyleSheet | null = null): string | void {
  // The style function mutates the element because implementing a pure function with no side effects
  // introduces too many edge cases that will limit will limit what the user can achieve with the function

  // Convert HTMLCollection to Array so it's easier to work with
  if (element instanceof HTMLCollection) {
    element = Array.from(element as HTMLElement[]);
  }

  // Create a new style element and get its stylesheet if none is provided
  let styleElement = null;
  
  if (styleSheet == null) {
    styleElement = document.createElement("style");
    // Create a unique id for the style element so it can easily be found in the dom
    const tempElementIdentifier = Array.isArray(element) ? element[0] : element;
    styleElement.id = `${
      tempElementIdentifier.tagName.toLowerCase() + (Array.isArray(element) ? "s" : "")
    }__${
      tempElementIdentifier.id || (
        Array.isArray(element) ? 
          element.length :
          Math.ceil(Math.random() * 10_000)
      )
    }`
    document.head.appendChild(styleElement);

    styleSheet = styleElement.sheet;
  }

  const rules = Object.entries(styleObj);

  let properties = "";

  // TODO: Transfer logic to string directory for use in case converter function
  for (let i = 0; i < rules.length; i++) {
    properties += `${rules[i][0].replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}: ${rules[i][1]};\n`
  }

  if (Array.isArray(element)) {
    for (let i = 0; i < element.length; i++) {
      styleSheet?.insertRule(`${element[i].tagName.toLowerCase()}{${properties}}`, styleSheet.cssRules.length);
    }
  } else {
    styleSheet?.insertRule(`${element.tagName.toLowerCase()}{${properties}}`, styleSheet.cssRules.length);
  }

  if (styleElement) return styleElement.id;
}

/**
 * 
 * @param {string} className - The desired className
 * @param {HTMLElement[] | HTMLCollection} elements - The elements to add the className to
 */
export function addClass(className: string, elements: HTMLElement[] | HTMLCollection): void {
  // The addClass function mutates the element because implementing a pure function with no side effects
  // introduces too many edge cases that will limit will limit what the user can achieve with the function
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
  // The removeClass function mutates the element because implementing a pure function with no side effects
  // introduces too many edge cases that will limit will limit what the user can achieve with the function
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}

type HTMLElementTypes = keyof htmlElementAttributes;

type HTMLElementAttributesMap = {
  [K in HTMLElementTypes]: htmlElementAttributes[K][number];
}

type ValidAttributes<E extends HTMLElementTypes> = HTMLElementAttributesMap[E];

export interface CreateElementOptions {
  attributes: [keyof ValidAttributes<HTMLElementTypes>, string][];
  id?: string;
  styles?: CSSStyleDeclaration;
  styleSheet?: CSSStyleSheet;
  children?: (HTMLElement | Node)[];
}

/**
 * 
 * @overload
 * @param {T extends keyof HTMLElementTagNameMap} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */

/**
 * 
 * @overload
 * @param {string} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */
export function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T, 
  options: {
    attributes?: ValidAttributes<T>[],
  } & CreateElementOptions
): HTMLElementTagNameMap[T];
export function createElement(tagName: string, options: CreateElementOptions): HTMLElement;


export function createElement(tagName: string, options: CreateElementOptions): HTMLElement {
  
  const element = document.createElement(tagName);
  
    if (!options) return element;

  // Add attributes if available

  if (options.attributes) {
    for (let i = 0; i < options.attributes.length; i++) {
      let [property, value] = options.attributes[i] as [string, string];
      element.setAttribute(property, value);
    }
  }

  // TODO: Add styles if available

  if (options.styles) {

    let rules = "";
  
    for (let i = 0; i < options.styles.length; i++) {
      rules += `${options.styles[0]}`;
    }

    // TODO: Modify styleSheet if available

    if (options.styleSheet) {
    
      options.styleSheet.insertRule(`${options.id} { ${rules} }`)
    }

  }

  // Add children if available

  if (options.children) {
    for (let i = 0; i < options.children.length; i++) {
      element.appendChild(options.children[i]);
    }
  }

  return element;
}

export default {
  getIds,
  style,
  addClass,
  removeClass,
};
