/**
 * DOM functions
 */
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
export declare function toggleVisibility(): void;
declare const _default: {
    getIds: typeof getIds;
    style: typeof style;
    addClass: typeof addClass;
    removeClass: typeof removeClass;
};
export default _default;
//# sourceMappingURL=index.d.ts.map