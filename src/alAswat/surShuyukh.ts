export const surShuyukh = async (sheikh: string, surah?: number): Promise<SheikhAudioResult> => {
  const base = 'https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs';
  
  const [audioData, imagesData]: [AudioItem[], ImageItem[]] = await Promise.all([
    (await fetch(`${base}/${sheikh}.json`)).json(),
    (await fetch(`${base}/images.json`)).json()
  ]);

  const image = imagesData.find(img => img.name === sheikh)?.image || '';

  return surah !== undefined 
    ? { url: audioData.find(a => a.surah === surah)?.url || '', image }
    : { audio: audioData, image };
};
