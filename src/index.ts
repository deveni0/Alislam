import fs from 'fs';
import path from 'path';

const mainExports: any = {};

const folders = fs.readdirSync(__dirname).filter(item => {
  const itemPath = path.join(__dirname, item);
  return fs.statSync(itemPath).isDirectory();
});

folders.forEach(folder => {
  const folderExports: any = {};
  const folderPath = path.join(__dirname, folder);
  const files = fs.readdirSync(folderPath);
  
  files.forEach(file => {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const moduleName = path.basename(file, '.ts');
      const modulePath = `./${folder}/${moduleName}`;
      
      const module = require(modulePath);
      
      Object.keys(module).forEach(key => {
        folderExports[key] = module[key];
      });
    }
  });
  
  mainExports[folder] = folderExports;
});

module.exports = mainExports;
