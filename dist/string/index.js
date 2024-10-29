/**
 * String Functions
 */
const stringCases = [
    "camel", "kebab", "pascal", "snake", "screamingSnake",
    "title", "sentence", "invertedTitle"
];
/**
 *
 * @param {string} string The string to be converted
 * @param {StringCase} to The case to convert the string to
 * @param {Separator} separator? Custom separator for complex strings
 * @returns {string} The converted string
 */
export function convertCase(string, to, separator) {
    if (typeof string !== "string")
        throw new Error(`Invalid argument. ${string} is not a string.`);
    if (!stringCases.includes(to))
        throw new Error(`Invalid argument. ${to} is not a valid string case.`);
    if (separator &&
        typeof separator !== "string" &&
        !(separator instanceof RegExp))
        throw new Error(`Invalid argument. ${separator} is not a string or regular expression.`);
    const separatorIsString = !!separator && typeof separator === "string";
    const sanitizedSeparator = separator && separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let searchString = separator
        ? separatorIsString
            ? new RegExp(`^[a-zA-Z]|${sanitizedSeparator}[a-zA-Z]`, "g")
            : new RegExp(`^[a-zA-Z]|${separator.source}[a-zA-Z]`, "g")
        : /^[a-zA-Z]|[A-Z]|[-_ ][a-zA-Z]/g;
    let replaceString = (c, offset) => { return c.toLocaleLowerCase(); };
    switch (to) {
        case "camel":
            replaceString = (c, offset) => {
                if (offset === 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return c[c.length - 1].toLocaleUpperCase();
            };
            return string.toLocaleLowerCase().replace(searchString, replaceString);
        case "kebab":
            replaceString = (c, offset) => {
                if (offset === 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return `-${c[c.length - 1].toLocaleLowerCase()}`;
            };
            return string.toLocaleLowerCase().replace(searchString, replaceString);
        case "pascal":
            replaceString = (c) => {
                return c[c.length - 1].toLocaleUpperCase();
            };
            return string.toLocaleLowerCase().replace(searchString, replaceString);
        case "snake":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return `_${c[c.length - 1].toLocaleLowerCase()}`;
            };
            return string.toLocaleLowerCase().replace(searchString, replaceString);
        case "screamingSnake":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleUpperCase();
                return `_${c[c.length - 1].toLocaleUpperCase()}`;
            };
            return string
                .toLocaleLowerCase()
                .replace(searchString, replaceString)
                .toLocaleUpperCase();
        case "title":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleUpperCase();
                return ` ${c[c.length - 1].toLocaleUpperCase()}`;
            };
            return string.toLocaleLowerCase().replace(searchString, replaceString);
        case "sentence":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleUpperCase();
                return ` ${c[c.length - 1].toLocaleLowerCase()}`;
            };
            return string
                .toLocaleLowerCase()
                .replace(searchString, replaceString);
        case "invertedTitle":
            replaceString = (c, offset) => {
                let _c = c;
                if (offset == 0 || c.length > 1)
                    _c = c[c.length - 1].toLocaleLowerCase();
                return `${c.length > 1 ? " " : ""}${_c}`;
            };
            return string
                .toLocaleUpperCase()
                .replace(searchString, replaceString);
        default:
            return string.replace(searchString, replaceString);
    }
}
// TODO: Other case convert functions 
// specifically for inter-variable-case conversions
export default {
    convertCase,
};
//# sourceMappingURL=index.js.map