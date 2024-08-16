/**
 * DOM functions
 */
/**
 *
 * @param id - The ID to search the DOM for
 * @returns {HTMLElement | null} - The element with that ID or null if no element exists
 */
const gId = (id) => document.getElementById(id);
/**
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
 *
 * @param {HTMLElement | HTMLElement[]} element - The element(s) to be styled
 * @param {CSSStyleDeclaration} styleObj - The styles to be applied to the element
 */
export function style(element, styleObj) {
    const entries = Object.entries(styleObj).filter(entry => !!entry[1]);
    for (let i = 0; i < entries.length; i++) {
        const property = entries[i][0];
        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                element[j].style[property] = entries[i][1];
            }
        }
        else {
            element.style[property] = entries[i][1];
        }
    }
}
/**
 *
 * @param {string} className - The desired className
 * @param {HTMLElement[] | HTMLCollection} elements - The elements to add the className to
 */
export function addClass(className, elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
    }
}
/**
 *
 * @param {string} className - The desired className
 * @param {HTMLElemet[] | HTMLCollection} elements - The elements to remove the className from
 */
export function removeClass(className, elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}
export function toggleVisibility() { }
export default {
    getIds,
    style,
    addClass,
    removeClass,
};
//# sourceMappingURL=index.js.map