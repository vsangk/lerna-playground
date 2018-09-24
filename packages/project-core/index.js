var pkgA = require("pkg-a");
var pkgB = require("pkg-b");

const core = `
CORE: ${pkgA} ${pkgB}
patch minor
`;

module.exports = core;
