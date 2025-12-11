export interface QuranSurah {
  number: number;
  name: string;
  text: string;
}

export async function txtQuran(surahNumber: number): Promise<string> {
  const formattedNumber = surahNumber.toString().padStart(3, '0');
  const url = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs/${formattedNumber}.json`;
  
  const response = await fetch(url);
  const data: QuranSurah = await response.json();
  
  return data;
}
