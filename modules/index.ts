const version: string = require("../package.json").version;

export { version };

// functoin
export { default as debounce } from "./debounce";
export { default as throttle } from "./throttle";
