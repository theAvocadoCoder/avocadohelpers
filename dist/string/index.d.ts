/**
 * String Functions
 */
declare const stringCases: readonly ["camel", "kebab", "pascal", "snake", "screamingSnake", "title", "sentence", "invertedTitle"];
export type StringCase = typeof stringCases[number];
export type Separator = string | RegExp;
/**
 *
 * @param {string} string The string to be converted
 * @param {StringCase} to The case to convert the string to
 * @param {Separator} separator? Custom separator for complex strings
 * @returns {string} The converted string
 */
export declare function convertCase(string: string, to: StringCase, separator?: Separator): string;
declare const _default: {
    convertCase: typeof convertCase;
};
export default _default;
//# sourceMappingURL=index.d.ts.map