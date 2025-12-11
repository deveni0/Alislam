import fs from 'fs';
import path from 'path';

const exportsObj: any = {};
const folders = fs.readdirSync(__dirname).filter(item => {
  const itemPath = path.join(__dirname, item);
  return fs.statSync(itemPath).isDirectory();
});

folders.forEach(folder => {
  const indexPath = path.join(__dirname, folder, 'index.ts');
  if (fs.existsSync(indexPath)) {
    const module = require(`./${folder}/index`);
    Object.keys(module).forEach(key => {
      exportsObj[key] = module[key];
    });
  }
});

export default exportsObj;
