/**
 * util/path.js
 * Helper to get the absolute path to the project root directory.
 * This is used when building absolute paths for files (views, data files, etc.).
 */
const path = require('path');

module.exports = path.dirname(require.main.filename);
