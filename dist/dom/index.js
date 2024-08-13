"use strict";
/***
 * DOM functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.gId = void 0;
exports.gIds = gIds;
const gId = (id) => document.getElementById(id);
exports.gId = gId;
function gIds(...ids) {
    const idArray = [];
    for (let i = 0; i < ids.length; i++) {
        idArray.push((0, exports.gId)(ids[i]));
    }
    return idArray;
}
exports.default = {
    gId: exports.gId,
    gIds,
};
