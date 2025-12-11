"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texts = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exportsObj = {};
const files = fs_1.default.readdirSync(__dirname);
files.forEach(file => {
    if (file.endsWith('.js') && file !== 'index.js') {
        const moduleName = path_1.default.basename(file, '.js');
        const modulePath = `./${moduleName}`;
        const module = require(modulePath);
        Object.keys(module).forEach(key => {
            exportsObj[key] = module[key];
        });
    }
});
exports.Texts = exportsObj;
