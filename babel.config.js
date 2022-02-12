/**
 * NOTE: Custom babel config means SWC (rust compiler for transformations) is disabled and babel is used instead.
 * This is because browserslist is not compatible with SWC as of 02/22.
 *
 * See these discussions:
 * https://github.com/vercel/next.js/discussions/12826
 * https://github.com/vercel/next.js/discussions/30174
 *
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ["next/babel"],
};
