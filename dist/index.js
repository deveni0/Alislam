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
            const modulePath = path.join(folderPath, file);
            const mod = require(modulePath);
            
            let value = mod;
            
            if (value && typeof value === 'object') {
                const clonedValue = { ...value };
                
                if ('default' in clonedValue) {
                    value = clonedValue.default;
                } else if (clonedValue.__esModule) {
                    delete clonedValue.__esModule;
                    
                    if (Object.keys(clonedValue).length === 1 && clonedValue[moduleName]) {
                        value = clonedValue[moduleName];
                    } else if (Object.keys(clonedValue).length > 0) {
                        value = clonedValue;
                    }
                } else if (clonedValue[moduleName]) {
                    value = clonedValue[moduleName];
                }
            }
            
            if (value && typeof value === 'object' && value.__esModule) {
                const { __esModule, ...rest } = value;
                value = Object.keys(rest).length === 1 && rest[moduleName] ? rest[moduleName] : rest;
            }
            
            folderExports[moduleName] = value;
        }
    });

    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = Object.keys(folderExports).length === 1 
            ? folderExports[Object.keys(folderExports)[0]]
            : folderExports;
    }
});

module.exports = mainExports;
