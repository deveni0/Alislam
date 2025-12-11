"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exportsObj = {};
const folders = fs_1.default.readdirSync(__dirname).filter(item => {
    const itemPath = path_1.default.join(__dirname, item);
    return fs_1.default.statSync(itemPath).isDirectory();
});
folders.forEach(folder => {
    const indexPath = path_1.default.join(__dirname, folder, 'index.js');
    if (fs_1.default.existsSync(indexPath)) {
        const module = require(`./${folder}/index.js`);
        Object.keys(module).forEach(key => {
            exportsObj[key] = module[key];
        });
    }
});
exports.default = exportsObj;
