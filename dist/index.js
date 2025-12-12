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
    
    const folderExports = {};
    
    files.forEach(file => {
        if (file.endsWith(".js") && file !== "index.js") {
            const moduleName = path.basename(file, ".js");
            const modulePath = `./${folder}/${moduleName}`;
            let mod = require(modulePath);
            
            if (mod && typeof mod === "object") {
                if ('default' in mod && !mod.__esModule) {
                    mod = mod.default;
                }
                
                if (mod && typeof mod === "object") {
                    const { __esModule, ...rest } = mod;
                    
                    if (Object.keys(rest).length === 0 && mod.default) {
                        mod = mod.default;
                    } else if (Object.keys(rest).length === 1 && rest[moduleName]) {
                        mod = rest[moduleName];
                    } else if (Object.keys(rest).length > 0) {
                        mod = rest;
                    }
                }
                
                if (mod && typeof mod === "object" && mod[moduleName]) {
                    mod = mod[moduleName];
                }
            }
            
            folderExports[moduleName] = mod;
        }
    });
    
    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
    }
});

module.exports = mainExports;
