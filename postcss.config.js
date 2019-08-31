const path = require('path');
const pluginMixins = require('postcss-mixins');
const pluginImport = require('postcss-import');
const pluginNested = require('postcss-nested');
const pluginOptimisations = require('cssnano');
const pluginAutoprefixer = require('autoprefixer');
const pluginTailwindCss = require('tailwindcss');

module.exports = {
  plugins: [
    pluginImport(),
    pluginTailwindCss(path.resolve('tailwind.config.js')),
    pluginMixins(),
    pluginNested(),
    pluginAutoprefixer(),
    pluginOptimisations()
  ]
};
