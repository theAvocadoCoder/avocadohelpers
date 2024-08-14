/***
 * DOM functions
 */
import { StyleObject } from "./types";
export declare const gId: (id: string) => HTMLElement | null;
export declare function gIds(...ids: string[]): (HTMLElement | null)[];
export declare function style(el: HTMLElement, styleObj: StyleObject): void;
declare const _default: {
    gId: (id: string) => HTMLElement | null;
    gIds: typeof gIds;
    style: typeof style;
};
export default _default;
//# sourceMappingURL=index.d.ts.map