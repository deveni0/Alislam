import fs from 'fs';

const files = fs.readdirSync(__dirname);
const exports: any = {};

files.forEach(file => {
  if (file.endsWith('.ts') && file !== 'index.ts') {
    const moduleName = file.replace('.ts', '');
    const module = require(`./${moduleName}`);
    
    Object.keys(module).forEach(key => {
      exports[key] = module[key];
    });
  }
});

export const Texts = exports;
