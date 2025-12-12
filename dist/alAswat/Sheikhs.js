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
exports.Sheikhs = void 0;
function Sheikhs(sheikhName, surahNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const audioUrl = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/${sheikhName}.json`;
        const imagesUrl = 'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/images.json';
        const [audioResponse, imagesResponse] = yield Promise.all([
            fetch(audioUrl),
            fetch(imagesUrl)
        ]);
        const audioData = yield audioResponse.json();
        const imagesData = yield imagesResponse.json();
        const sheikhImage = (imagesData.find(img => img.name === sheikhName)?.image) || '';
        if (surahNumber) {
            const surah = audioData.find(item => item.surah === surahNumber);
            return {
                url: surah ? surah.url : '',
                image: sheikhImage
            };
        }
        return {
            audio: audioData,
            image: sheikhImage
        };
    });
}
exports.Sheikhs = Sheikhs;
