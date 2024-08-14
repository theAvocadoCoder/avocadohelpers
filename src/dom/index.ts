/***
 * DOM functions
 */

import { StyleObject } from "./types";

export const gId = (id: string) => document.getElementById(id);

export function gIds(...ids: string[]): (HTMLElement | null)[] {
  const idArray: (HTMLElement | null)[] = [];
  for (let i = 0; i < ids.length; i++) {
    idArray.push(gId(ids[i]));
  }
  return idArray;
}

export function style(el: HTMLElement, styleObj: StyleObject) {
  const entries = Object.entries(styleObj).filter(entry => !!entry[1]);
  for (let i = 0; i < entries.length; i++) {
    const property = entries[i][0];
    (el.style as { [key: string]: any })[property] = entries[i][1]
  }
}

export default {
  gId,
  gIds,
  style,
};
