"use strict";

const fs = require("fs");
const path = require("path");

const mainExports = {};

const folders = fs.readdirSync(__dirname).filter(item => {
    const itemPath = path.join(__dirname, item);
    return fs.statSync(itemPath).isDirectory();
});

folders.forEach(folder => {
    const folderExports = {};
    const folderPath = path.join(__dirname, folder);
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
        if (file.endsWith(".js") && file !== "index.js") {
            const moduleName = path.basename(file, ".js");
            const modulePath = `./${folder}/${moduleName}`;
            const mod = require(modulePath);

            folderExports[moduleName] =
                mod && typeof mod === "object" && "default" in mod
                    ? mod.default
                    : mod;
        }
    });

    if (Object.keys(folderExports).length > 0) {
        mainExports[folder] = folderExports;
    }
});

module.exports = mainExports;
