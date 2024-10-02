/**
 * String Functions
 */
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
    if (!["kebab", "camel", "pascal", "snake", "screamingSnake"].includes(to))
        throw new Error(`Invalid argument. ${to} is not a valid string case.`);
    if (separator && typeof separator !== "string" && !(separator instanceof RegExp))
        throw new Error(`Invalid argument. ${separator} is not a string or regular expression.`);
    const separatorIsString = !!separator && typeof separator === "string";
    const sanitizedSeparator = separator && separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let searchString = separator
        ? separatorIsString
            ? new RegExp(`^[a-z]|^[A-Z]|${sanitizedSeparator}[a-z]|${sanitizedSeparator}[A-Z]`, "g")
            : new RegExp(`^[a-z]|^[A-Z]|${separator.source}[a-z]|${separator.source}[A-Z]`, "g")
        : /^[a-z]|^[A-Z]|[A-Z]|-[a-z]|_[a-z]| [A-Z]| [a-z]/g;
    let replaceString = (c, offset) => { return c; };
    switch (to) {
        case "camel":
            replaceString = (c, offset) => {
                if (offset === 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return c[c.length - 1].toLocaleUpperCase();
            };
            break;
        case "kebab":
            replaceString = (c, offset) => {
                if (offset === 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return `-${c[c.length - 1].toLocaleLowerCase()}`;
            };
            break;
        case "pascal":
            replaceString = (c) => {
                return c[c.length - 1].toLocaleUpperCase();
            };
            break;
        case "snake":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleLowerCase();
                return `_${c[c.length - 1].toLocaleLowerCase()}`;
            };
            break;
        case "screamingSnake":
            replaceString = (c, offset) => {
                if (offset == 0)
                    return c[c.length - 1].toLocaleUpperCase();
                return `_${c[c.length - 1].toLocaleUpperCase()}`;
            };
            break;
    }
    return string.replace(searchString, replaceString);
}
export default {
    convertCase,
};
//# sourceMappingURL=index.js.map