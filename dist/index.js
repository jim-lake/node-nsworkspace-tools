'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.setIconForFile = setIconForFile;
const node_path_1 = require('node:path');
const addon = require('../build/Release/node_nsworkspace_tools.node');
exports.default = {
  setIconForFile,
};
function setIconForFile(icon, file) {
  const icon_path = (0, node_path_1.resolve)(icon);
  const file_path = (0, node_path_1.resolve)(file);
  const ret = addon.setIconForFile(icon_path, file_path);
  if (typeof ret === 'string') {
    throw new Error(ret);
  }
  return ret;
}
