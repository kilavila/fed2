// @ts-check
// INFO: README:
// Adding @ts-check at the top of a file
// will add type checking with JSDoc.
// Read more about JSDoc:
//
// https://jsdoc.app/
// https://www.npmjs.com/package/jsdoc
import "./css/style.css";

import router from "./js/router";

await router(window.location.pathname);
