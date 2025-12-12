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
            const mod = require(modulePath);
            const value = mod && typeof mod === "object" && "default" in mod ? mod.default : mod;
            folderExports[moduleName] = value;
        }
    });

    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
    }
});

mainExports.__esModule = true;

module.exports = mainExports;
