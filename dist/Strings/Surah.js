"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surah = void 0;
function Surah(surahNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const formattedNumber = surahNumber.toString().padStart(3, '0');
        const url = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs/${formattedNumber}.json`;
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
exports.Surah = Surah;
