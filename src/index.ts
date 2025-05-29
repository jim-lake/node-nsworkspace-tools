import { resolve } from 'node:path';
const addon = require('../build/Release/node_nsworkspace_tools.node');

export default {
  setIconForFile,
};

export function setIconForFile(icon: string, file: string): number {
  const icon_path = resolve(icon);
  const file_path = resolve(file);
  const ret = addon.setIconForFile(icon_path, file_path);
  if (typeof ret === 'string') {
    throw new Error(ret);
  }
  return ret;
}
