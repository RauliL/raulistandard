# Rauli's JavaScript Standard Style

<p align="center">
  <a href="https://travis-ci.org/RauliL/standard"><img src="https://img.shields.io/travis/RauliL/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/raulistandard"><img src="https://img.shields.io/npm/v/raulistandard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-raulistandard"><img src="https://img.shields.io/npm/dm/eslint-config-raulistandard.svg" alt="npm downloads"></a>
</p>

JavaScript style guide based on [semistandard](https://github.com/Flet/semistandard)
with following modifications:

- String literals must use double quotes instead of single quotes.
- Dangling commas are not only allowed, but required. (Except for
  function parameters where they are currently not allowed due to
  lack of support for this feature.)

## Why?

Because the so called "[standard](https://github.com/standard/standard)"
JavaScript style guide is pretty good, but annoying to use because of
lack of semicolons and dangling commas.
