export interface SurahAudio {
  surah: number;
  url: string;
}

export async function Sheikhs(sheikhName: string, surahNumber?: number): Promise<string | SurahAudio[]> {
  const url = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Sheikhs/${sheikhName}.json`;
  
  const response = await fetch(url);
  const data: SurahAudio[] = await response.json();
  
  if (surahNumber) {
    const surah = data.find(item => item.surah === surahNumber);
    return surah ? surah.url : '';
  }
  
  return data;
}
