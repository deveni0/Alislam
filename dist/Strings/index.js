const fs = require('fs');

const files = fs.readdirSync(__dirname);
const exports = {};

files.forEach(file => {
  if (file.endsWith('.js') && file !== 'index.ts') {
    const moduleName = file.replace('.js', '');
    const module = require(`./${moduleName}`);
    
    Object.keys(module).forEach(key => {
      exports[key] = module[key];
    });
  }
});

exports.Texts = exports;
