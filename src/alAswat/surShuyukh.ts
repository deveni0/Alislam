interface SurahAudio {
  surah: number;
  url: string;
}

interface SheikhImage {
  name: string;
  image: string;
}

interface SheikhAudioResult {
  url?: string;
  image?: string;
  audio?: SurahAudio[];
}

export const surShuyukh = async (sheikh: string, surah?: number): Promise<SheikhAudioResult> => {
  const base = 'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs';
  
  const [audioData, imagesData]: [SurahAudio[], SheikhImage[]] = await Promise.all([
    fetch(`${base}/${sheikh}.json`).then(res => res.json()),
    fetch(`${base}/images.json`).then(res => res.json())
  ]);

  const image = imagesData.find(img => img.name === sheikh)?.image || '';

  return surah !== undefined 
    ? { 
        url: audioData.find(a => a.surah === surah)?.url || '', 
        image 
      }
    : { 
        audio: audioData, 
        image 
      };
};
