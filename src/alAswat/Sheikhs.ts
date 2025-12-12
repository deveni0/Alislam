interface SurahItem {
    surah: number;
    url: string;
}

interface SheikhImage {
    name: string;
    image: string;
}

export async function Sheikhs(sheikhName: string, surahNumber?: number) {
    const [audioUrl, imagesUrl] = [
        `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/${sheikhName}.json`,
        'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/images.json'
    ];
    
    const [audioResponse, imagesResponse] = await Promise.all([fetch(audioUrl), fetch(imagesUrl)]);
    const [audioData, imagesData]: [SurahItem[], SheikhImage[]] = await Promise.all([audioResponse.json(), imagesResponse.json()]);
    
    const sheikhImage = imagesData.find(img => img.name === sheikhName)?.image || '';
    
    if (surahNumber !== undefined) {
        const surah = audioData.find(item => item.surah === surahNumber);
        return { url: surah?.url || '', image: sheikhImage };
    }
    
    return { audio: audioData, image: sheikhImage };
}

export default Sheikhs;
