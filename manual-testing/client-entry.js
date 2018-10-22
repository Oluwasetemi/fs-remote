/* global document */
const createFsClient = require("../createFsClient");
const buffer = require("buffer");

global.Buffer = buffer.Buffer;
global.fs = createFsClient("http://localhost:3000");

document.write("Open devtools and try using the global `fs` object");