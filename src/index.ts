import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const mainExports: Record<string, any> = {};

const folders = readdirSync(__dirname).filter(item => {
    const full = join(__dirname, item);
    return statSync(full).isDirectory();
});

for (const folder of folders) {
    const folderPath = join(__dirname, folder);
    const files = readdirSync(folderPath);
    
    const folderExports: Record<string, any> = {};
    
    for (const file of files) {
        if ((file.endsWith('.js') || file.endsWith('.ts')) && 
            !file.includes('.d.ts') && 
            file !== 'index.js' && 
            file !== 'index.ts') {
            
            const moduleName = basename(file, file.endsWith('.ts') ? '.ts' : '.js');
            const extension = file.endsWith('.ts') ? '.ts' : '.js';
            const modulePath = `./${folder}/${moduleName}${extension}`;
            
            try {
                const mod = await import(modulePath);
                folderExports[moduleName] = mod.default || mod;
            } catch (error) {
                console.error(`Error loading module ${modulePath}:`, error);
            }
        }
    }
    
    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
    }
}

export default mainExports;
