/**
 * DOM functions
 */
import { htmlElementAttributes } from "./types";
/**
 * Get multiple elements by their ID
 *
 * @param ids - The IDs to search the DOM for
 * @returns {(HTMLElement | null)[]} - An array of elements with the IDs or null where no element exists
 */
export declare function getIds(...ids: string[]): (HTMLElement | null)[];
export type IterableElements = HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollection;
/**
 * Create a stylesheet to style a single element element
 *
 * @overload
 * @param {HTMLElement} element
 * @param {Partial<CSSStyleDeclaration>} styleObj
 * @param {CSSStyleSheet} styleSheet
 */
/**
 * Create a stylesheet to style multiple elements
 *
 * @overload
 * @param {IterableElements} elements
 * @param {Partial<CSSStyleDeclaration>} styleObj
 * @param {CSSStyleSheet} styleSheet
 */
export declare function style(element: HTMLElement, styleObj: Partial<CSSStyleDeclaration>, styleSheet?: CSSStyleSheet | null): string | void;
export declare function style(elements: IterableElements, styleObj: Partial<CSSStyleDeclaration>, styleSheet?: CSSStyleSheet | null): string | void;
/**
 * Add a class to multiple elements at once
 *
 * @param {string} className - The desired className
 * @param {IterableElements} elements - The elements to add the className to
 */
export declare function addClass(className: string, elements: IterableElements): void;
/**
 * Remove a class from multiple elements at once
 *
 * @param {string} className - The desired className
 * @param {IterableElements} elements - The elements to remove the className from
 */
export declare function removeClass(className: string, elements: IterableElements): void;
export interface CreateElementOptions<T extends keyof htmlElementAttributes> {
    attributes?: [htmlElementAttributes[`${T}` | "*"], string][];
    children?: (HTMLElement | Node)[];
    styles?: CSSStyleDeclaration;
    styleSheet?: CSSStyleSheet;
}
/**
 * Create a HTML element
 *
 * @overload
 * @param {T extends keyof htmlElementAttributes} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */
/**
 * Create a custom HTML element
 *
 * @overload
 * @param {string} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */
export declare function createElement<T extends keyof htmlElementAttributes>(tagName: T, options: {
    attributes?: [htmlElementAttributes[`${T}` | "*"], string][];
    children?: (HTMLElement | Node)[];
    styles?: CSSStyleDeclaration;
    styleSheet?: CSSStyleSheet;
}): HTMLElement;
export declare function createElement(tagName: string, options: {
    attributes?: [htmlElementAttributes[`${keyof htmlElementAttributes}` | "*"], string][];
    children?: (HTMLElement | Node)[];
    styles?: CSSStyleDeclaration;
    styleSheet?: CSSStyleSheet;
}): HTMLElement;
declare const _default: {
    getIds: typeof getIds;
    style: typeof style;
    addClass: typeof addClass;
    removeClass: typeof removeClass;
    createElement: typeof createElement;
};
export default _default;
//# sourceMappingURL=index.d.ts.map