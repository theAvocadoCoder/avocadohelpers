/**
 * String Functions
 */

const stringCases = [
  "camel", "kebab", "pascal", "snake", "screamingSnake",
  "title", "sentence", "invertedTitle"
] as const;

export type StringCase = typeof stringCases[number];
export type Separator = string | RegExp;

/**
 * 
 * @param {string} string The string to be converted
 * @param {StringCase} to The case to convert the string to
 * @param {Separator} separator? Custom separator for complex strings
 * @returns {string} The converted string
 */

export function convertCase(string: string, to: StringCase, separator?: Separator): string {
  if (typeof string !== "string") throw new Error(`Invalid argument. ${string} is not a string.`);
  if (!stringCases.includes(to)) throw new Error(`Invalid argument. ${to} is not a valid string case.`);
  if (
    separator && 
    typeof separator !== "string" && 
    !(separator instanceof RegExp)
  ) throw new Error(`Invalid argument. ${separator} is not a string or regular expression.`);

  const separatorIsString = !!separator && typeof separator === "string";

  const sanitizedSeparator = separator && (separator as string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  let searchString = separator 
    ? separatorIsString
      ? new RegExp(`^[a-zA-Z]|${sanitizedSeparator}[a-zA-Z]`, "g")
      : new RegExp(`^[a-zA-Z]|${(separator as RegExp).source}[a-zA-Z]`, "g")
    : /^[a-zA-Z]|[A-Z]|[-_ ][a-zA-Z]/g;
  let replaceString = (c: string, offset?: number) => {return c.toLocaleLowerCase()};

  switch (to) {
    case "camel":
      replaceString = (c: string, offset?: number) => {
        if (offset === 0) return c[c.length - 1].toLocaleLowerCase();
        return c[c.length - 1].toLocaleUpperCase();
      };
      return string.toLocaleLowerCase().replace(searchString, replaceString);

    case "kebab":
      replaceString = (c: string, offset?: number) => {
        if (offset === 0) return c[c.length - 1].toLocaleLowerCase();
        return `-${c[c.length - 1].toLocaleLowerCase()}`;
      };
      return string.toLocaleLowerCase().replace(searchString, replaceString);

    case "pascal":
      replaceString = (c: string) => {
        return c[c.length - 1].toLocaleUpperCase();
      };
      return string.toLocaleLowerCase().replace(searchString, replaceString);

    case "snake":
      replaceString = (c: string, offset?: number) => {
        if (offset == 0) return c[c.length - 1].toLocaleLowerCase();
        return `_${c[c.length - 1].toLocaleLowerCase()}`;
      };
      return string.toLocaleLowerCase().replace(searchString, replaceString);

    case "screamingSnake":
      replaceString = (c: string, offset?: number) => {
        if (offset == 0) return c[c.length - 1].toLocaleUpperCase();
        return `_${c[c.length - 1].toLocaleUpperCase()}`;
      };
      return string
        .toLocaleLowerCase()
        .replace(searchString, replaceString)
        .toLocaleUpperCase();

    case "title":
      replaceString = (c: string, offset?: number) => {
        if (offset == 0) return c[c.length - 1].toLocaleUpperCase();
        return ` ${c[c.length - 1].toLocaleUpperCase()}`;
      }
      return string.toLocaleLowerCase().replace(searchString, replaceString);

    case "sentence":
      replaceString = (c: string, offset?: number) => {
        if (offset == 0) return c[c.length - 1].toLocaleUpperCase();
        return ` ${c[c.length - 1].toLocaleLowerCase()}`;
      }
      return string
        .toLocaleLowerCase()
        .replace(searchString, replaceString);
    
    
    case "invertedTitle":
      replaceString = (c: string, offset?: number) => {
        let _c = c;
        if (offset == 0 || c.length > 1) _c = c[c.length - 1].toLocaleLowerCase();
        return `${
          c.length > 1 ? " " : ""
        }${_c}`;
      }
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
}
