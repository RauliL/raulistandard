var eslint = require("eslint");
var path = require("path");
var pkg = require("./package.json");

module.exports = {
  bugs: pkg.bugs.url,
  cmd: "raulistandard",
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, "eslintrc.json"),
  },
  homepage: pkg.homepage,
  tagline: "Rauli's standard JavaScript style guide",
  version: pkg.version,
};
