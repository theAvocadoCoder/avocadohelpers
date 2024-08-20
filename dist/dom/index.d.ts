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
 */
/**
 *
 * @overload
 * @param {HTMLElement[]} elements
 * @param {CSSStyleDeclaration} styleObj
 */
export declare function style(element: HTMLElement, styleObj: CSSStyleDeclaration): void;
export declare function style(elements: HTMLElement[], styleObj: CSSStyleDeclaration): void;
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
type HTMLElementTypes = keyof htmlElementAttributes;
type HTMLElementAttributesMap = {
    [K in HTMLElementTypes]: htmlElementAttributes[K][number];
};
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
export declare function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, options: {
    attributes?: ValidAttributes<T>[];
} & CreateElementOptions): HTMLElementTagNameMap[T];
export declare function createElement(tagName: string, options: CreateElementOptions): HTMLElement;
declare const _default: {
    getIds: typeof getIds;
    style: typeof style;
    addClass: typeof addClass;
    removeClass: typeof removeClass;
};
export default _default;
//# sourceMappingURL=index.d.ts.map