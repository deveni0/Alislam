import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const mainExports = {};

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
            folderExports[moduleName] = mod[moduleName] || mod.default || mod;
        }
    }
    
    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
    }
}

export default mainExports;

if (mainExports.Strings) {
    export const Strings = mainExports.Strings;
    if (mainExports.Strings.Surah) {
        export const Surah = mainExports.Strings.Surah;
    }
}

if (mainExports.alAswat) {
    export const alAswat = mainExports.alAswat;
    if (mainExports.alAswat.Sheikhs) {
        export const Sheikhs = mainExports.alAswat.Sheikhs;
    }
}
