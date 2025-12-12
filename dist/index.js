"use strict";

const fs = require("fs");
const path = require("path");

const mainExports = {};

const folders = fs.readdirSync(__dirname).filter(item => {
    const full = path.join(__dirname, item);
    return fs.statSync(full).isDirectory();
});

folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    const files = fs.readdirSync(folderPath);
    
    files.forEach(file => {
        if (file.endsWith(".js") && file !== "index.js") {
            const moduleName = path.basename(file, ".js");
            const modulePath = `./${folder}/${moduleName}`;
            let mod = require(modulePath);
            
            if (mod && typeof mod === "object") {
                delete mod.__esModule;
                
                if (mod.default !== undefined) {
                    mod = mod.default;
                }
                
                if (mod && typeof mod === "object" && mod[moduleName]) {
                    mod = mod[moduleName];
                }
            }
            
            if (!mainExports[folder]) {
                mainExports[folder] = {};
            }
            
            mainExports[folder][moduleName] = mod;
        }
    });
    
    if (mainExports[folder] && typeof mainExports[folder] === "object") {
        const keys = Object.keys(mainExports[folder]);
        if (keys.length === 1) {
            mainExports[folder] = mainExports[folder][keys[0]];
        }
    }
});

module.exports = mainExports;
