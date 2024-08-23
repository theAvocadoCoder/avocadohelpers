/**
 * DOM functions
 */
import { htmlElementAttributes } from "./types";
/**
 *
 * @param ids - The IDs to search the DOM for
 * @returns {(HTMLElement | null)[]} - An array of elements with the IDs or null where no element exists
 */
export declare function getIds(...ids: string[]): (HTMLElement | null)[];
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
export declare function style(element: HTMLElement, styleObj: CSSStyleDeclaration, styleSheet?: CSSStyleSheet | null): string | void;
export declare function style(elements: HTMLElement[], styleObj: CSSStyleDeclaration, styleSheet?: CSSStyleSheet | null): string | void;
/**
 *
 * @param {string} className - The desired className
 * @param {HTMLElement[] | HTMLCollection} elements - The elements to add the className to
 */
export declare function addClass(className: string, elements: HTMLElement[] | HTMLCollection): void;
/**
 *
 * @param {string} className - The desired className
 * @param {HTMLElemet[] | HTMLCollection} elements - The elements to remove the className from
 */
export declare function removeClass(className: string, elements: HTMLElement[] | HTMLCollection): void;
export interface CreateElementOptions<T extends keyof htmlElementAttributes> {
    attributes?: [htmlElementAttributes[`${T}` | "*"], string][];
    children?: (HTMLElement | Node)[];
    styles?: CSSStyleDeclaration;
    styleSheet?: CSSStyleSheet;
}
/**
 *
 * @overload
 * @param {T extends keyof htmlElementAttributes} tagName - The tagName of the element
 * @param {CreateElementOptions} options - Options for attributes, styles and children
 */
/**
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