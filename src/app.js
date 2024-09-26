// @ts-check
// INFO: README:
// Adding @ts-check at the top of a file
// will add type checking with JSDoc.
// Read more about JSDoc:
//
// https://jsdoc.app/
// https://www.npmjs.com/package/jsdoc

import "./css/style.css";
// import navbar from "./js/components/navbar";
import router from "./js/router";

console.log("Running app.js");

// navbar();

await router(window.location.pathname);
