/**
 * String Functions
 */

export type StringCase = "camel" | "kebab" | "pascal" | "snake";

/**
 * 
 * @param {string} string The string to be converted
 * @param {StringCase} to The case to convert the string to
 * @returns {string} The converted string
 */

export function convertCase(string: string, to: StringCase): string {

  let searchString = /^[A-Z]|^[a-z]|[A-Z]|-[a-z]|_[a-z]/g,
    replaceString = (c: string) => {return c};

  
  switch (to) {
    case "kebab":
      replaceString = (c: string) => {
        if (string[0] === c) return c.toLocaleLowerCase();
        return c[c.length - 1].toLocaleUpperCase();
      };
      break;
    case "kebab":
      replaceString = (c: string) => {
        return `-${c[c.length - 1].toLocaleLowerCase()}`;
      };
      break;
    case "pascal":
      replaceString = (c: string) => {
        return c[c.length - 1].toLocaleUpperCase();
      };
      break;
    case "snake":
      replaceString = (c: string) => {
        return `_${c[c.length - 1].toLocaleLowerCase()}`;
      };
      break;
  }

  return string.replace(searchString, replaceString);

}

export default {
  convertCase,
}
