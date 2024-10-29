/**
 * DOM functions
 */
import { convertCase } from "../string";
/**
 * Get a single element by ID
 *
 * @param id - The ID to search the DOM for
 * @returns {HTMLElement | null} - The element with that ID or null if no element exists
 */
const gId = (id) => document.getElementById(id);
/**
 * Get multiple elements by their ID
 *
 * @param ids - The IDs to search the DOM for
 * @returns {(HTMLElement | null)[]} - An array of elements with the IDs or null where no element exists
 */
export function getIds(...ids) {
    const idArray = [];
    for (let i = 0; i < ids.length; i++) {
        idArray.push(gId(ids[i]));
    }
    return idArray;
}
/**
 * Create a stylesheet to style a single element or multiple elements
 *
 * @param {HTMLElement | IterableElements} element - The element(s) to be styled
 * @param {Partial<CSSStyleDeclaration>} styleObj - The styles to be applied to the element
 * @param {CSSStyleSheet} styleSheet - The stylesheet to add the rules to
 */
export function style(element, styleObj, styleSheet = null) {
    // The style function mutates the element because implementing a pure function with no side effects
    // introduces too many edge cases that will limit what the user can achieve with the function
    // TODO: The function currently styles all elements with the tag provided. Make it so the user can
    // decide whether to style all elements with that tag or just the specific one provided
    // Convert HTMLCollection to Array so it's easier to work with
    if (!(element instanceof HTMLElement)) {
        element = Array.from(element);
    }
    // Create a new style element and get its stylesheet if none is provided
    let styleElement = null;
    if (styleSheet == null) {
        styleElement = document.createElement("style");
        // Create a unique id for the style element so it can easily be found in the dom
        const tempElementIdentifier = Array.isArray(element) ? element[0] : element;
        styleElement.id = `${tempElementIdentifier.tagName.toLowerCase() + (Array.isArray(element) ? "s" : "")}__${tempElementIdentifier.id || (Array.isArray(element) ?
            element.length :
            Math.ceil(Math.random() * 10000))}`;
        document.head.appendChild(styleElement);
        styleSheet = styleElement.sheet;
    }
    const rules = Object.entries(styleObj);
    let properties = "";
    // Add each rule in the style object to the properties string
    for (let i = 0; i < rules.length; i++) {
        properties += `${convertCase(rules[i][0], "kebab")}: ${rules[i][1]};\n`;
    }
    if (Array.isArray(element)) {
        let selectors = new Set();
        const [elementLength, lastIndex] = [element.length, element.length - 1];
        for (let i = 0; i < elementLength; i++) {
            selectors.add(`${element[i].tagName.toLowerCase()}${i === lastIndex ? '' : ','}`);
        }
        styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.insertRule(`${Array.from(selectors).join("")}{${properties}}`, styleSheet.cssRules.length);
    }
    else {
        styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.insertRule(`${element.tagName.toLowerCase()}{${properties}}`, styleSheet.cssRules.length);
    }
    if (styleElement)
        return styleElement.id;
}
/**
 * Add a class to multiple elements at once
 *
 * @param {string} className - The desired className
 * @param {IterableElements} elements - The elements to add the className to
 */
export function addClass(className, elements) {
    // The addClass function mutates the element because implementing a pure function with no side effects
    // introduces too many edge cases that will limit will limit what the user can achieve with the function
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
    }
}
/**
 * Remove a class from multiple elements at once
 *
 * @param {string} className - The desired className
 * @param {IterableElements} elements - The elements to remove the className from
 */
export function removeClass(className, elements) {
    // The removeClass function mutates the element because implementing a pure function with no side effects
    // introduces too many edge cases that will limit will limit what the user can achieve with the function
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}
export function createElement(tagName, options) {
    const element = document.createElement(tagName);
    if (!options)
        return element;
    // Add attributes if available
    if (options.attributes) {
        for (let i = 0; i < options.attributes.length; i++) {
            let [property, value] = options.attributes[i];
            element.setAttribute(property, value);
        }
    }
    // Add children if available
    if (options.children) {
        for (let i = 0; i < options.children.length; i++) {
            if (options.children[i] instanceof Node || options.children[i] instanceof HTMLElement) {
                element.appendChild(options.children[i]);
            }
            else {
                element.appendChild(document.createTextNode(`${options.children[i]}`));
            }
        }
    }
    // Add styles if available
    if (options.styles) {
        style(element, options.styles, options.styleSheet || null);
    }
    return element;
}
export default {
    getIds,
    style,
    addClass,
    removeClass,
    createElement,
};
//# sourceMappingURL=index.js.map