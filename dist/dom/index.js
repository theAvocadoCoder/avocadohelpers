/***
 * DOM functions
 */
export const gId = (id) => document.getElementById(id);
export function gIds(...ids) {
    const idArray = [];
    for (let i = 0; i < ids.length; i++) {
        idArray.push(gId(ids[i]));
    }
    return idArray;
}
export function style(el, styleObj) {
    const entries = Object.entries(styleObj).filter(entry => !!entry[1]);
    for (let i = 0; i < entries.length; i++) {
        const property = entries[i][0];
        el.style[property] = entries[i][1];
    }
}
export default {
    gId,
    gIds,
    style,
};
//# sourceMappingURL=index.js.map