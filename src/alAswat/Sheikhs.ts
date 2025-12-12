export interface SurahAudio {
  surah: number;
  url: string;
}
export interface SheikhInfo {
  name: string;
  image: string;
}
export async function Sheikhs(sheikhName: string, surahNumber?: number): Promise<{ url: string; image: string } | { audio: SurahAudio[]; image: string }> {
  const audioUrl = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/${sheikhName}.json`;
  const imagesUrl = 'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/images.json';
  const [audioResponse, imagesResponse] = await Promise.all([
    fetch(audioUrl),
    fetch(imagesUrl)
  ]);
  const audioData: SurahAudio[] = await audioResponse.json();
  const imagesData: SheikhInfo[] = await imagesResponse.json();
  const sheikhImage = imagesData.find(img => img.name === sheikhName)?.image || '';
  
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
