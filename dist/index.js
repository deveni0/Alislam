"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mainExports = {};
const folders = fs_1.default.readdirSync(__dirname).filter(item => {
    const itemPath = path_1.default.join(__dirname, item);
    return fs_1.default.statSync(itemPath).isDirectory();
});
folders.forEach(folder => {
    const folderExports = {};
    const folderPath = path_1.default.join(__dirname, folder);
    const files = fs_1.default.readdirSync(folderPath);
    files.forEach(file => {
        if (file.endsWith('.js') && file !== 'index.js') {
            const moduleName = path_1.default.basename(file, '.js');
            const modulePath = `./${folder}/${moduleName}`;
            const module = require(modulePath);
            Object.keys(module).forEach(key => {
                folderExports[key] = module[key];
            });
        }
    });
    mainExports[folder] = folderExports;
});
module.exports = mainExports;
