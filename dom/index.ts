/***
 * DOM functions
 */

export const gId = (id: string) => document.getElementById(id);

export function gIds(...ids: string[]) {
  const idArray: (HTMLElement | null)[] = [];
  for (let i = 0; i < ids.length; i++) {
    idArray.push(gId(ids[i]));
  }
  return idArray;
}

export default {
  gId,
  gIds,
};