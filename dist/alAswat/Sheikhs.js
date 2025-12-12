"use strict";

export async function Sheikhs(sheikhName, surahNumber) {
    const audioUrl = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/${sheikhName}.json`;
    const imagesUrl = 'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/images.json';
    
    const [audioResponse, imagesResponse] = await Promise.all([
        fetch(audioUrl),
        fetch(imagesUrl)
    ]);
    
    const audioData = await audioResponse.json();
    const imagesData = await imagesResponse.json();
    
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
}

export default Sheikhs;
