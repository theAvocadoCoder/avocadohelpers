import domFunctions from "./dom/index";
import stringFunctions from "./string/index";
import utilsFunctions from "./utils/index";

const _ = {
  ...domFunctions,
  ...stringFunctions,
  ...utilsFunctions,
}

export default _;