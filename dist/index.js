"use strict";

import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const mainExports = {};
const allExports = {};

const folders = readdirSync(__dirname).filter(item => {
    const full = join(__dirname, item);
    return statSync(full).isDirectory();
});

for (const folder of folders) {
    const folderPath = join(__dirname, folder);
    const files = readdirSync(folderPath);
    const folderExports = {};
    
    for (const file of files) {
        if (file.endsWith('.js') && !file.includes('.d.ts') && file !== 'index.js') {
            const moduleName = basename(file, '.js');
            const modulePath = `./${folder}/${moduleName}.js`;
            
            const mod = await import(modulePath);
            const exportValue = mod[moduleName] || mod.default || mod;
            
            folderExports[moduleName] = exportValue;
            allExports[moduleName] = exportValue;
        }
    }
    
    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
        allExports[folder] = folderExports;
    }
}

export default mainExports;

export const Strings = mainExports.Strings || {};
export const alAswat = mainExports.alAswat || {};
