const WorkspaceTools = require('../dist');

const icon = process.argv[2];
const file = process.argv[3];

if (!icon || !file) {
  console.log("Usage: set_icon <icon> <file>");
  process.exit(-1);
}

console.log("set_icon: icon:", icon, "file:", file);
try {
  const ret = WorkspaceTools.setIconForFile(icon, file);
  console.log("ret:", ret);
} catch (e) {
  console.log("threw:", e);
}
